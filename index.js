class MyPromise {
    constructor(action) {
        this.status = 'pending';
        this.value = null;
        this.error = null;
        this.thenCallbacks = [];
        this.onCatch = undefined;
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);

        action(this.onResolve, this.onReject);
    }

    then(handleSuccess) {
        this.thenCallbacks.push(handleSuccess);
            if (this.status === 'resolved') {
                this.onResolve(this.value)
                this.status = 'pending';
            }
        return this;
    }

    catch(handleError) {
        this.onCatch = handleError;
        if (this.status === 'rejected') {
            this.onReject(this.error)
            this.status = 'pending';
        }

        return this;
    }

    onResolve(value) {
        if (this.status === 'pending') {
            this.status = 'resolved';
            this.value = value;
        }
        let result;
        this.thenCallbacks.forEach((func) => {
            if (this.thenCallbacks.length !== 0) {
                result = func(this.value)
            
                if (result instanceof Error) {
                    this.status = 'rejected';
                    this.error = result;
                    this.onReject(this.error)
                }
                else {
                    this.status = 'resolved';
                    this.value = result;
                    this.error = null;
                }
            }
        });
    }

    onReject(error) {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.error = error;
        }
        let result = this.onCatch(this.error)
            if (result instanceof Error) {
                this.status = 'rejected';
                this.error = result;
            }
            else {
                this.status = 'resolved';
                this.value = result;
            }
    }
}

function ajax(url, config) {
    return new MyPromise((onResolve, onReject) => {
        let request = new XMLHttpRequest();
        request.open(config.method, url);
        request.setRequestHeader(...config.headers);
        request.send(config.body);
        request.onload = function() {
            if (request.status === 200) {
                onResolve(request.response)
            } else {
                onReject('error')
            }
        }
        request.onerror = function(e) {
            onReject(e)
        }
    })
}

ajax('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: 'Content-Type", "application/x-www-form-urlencoded',
    body: ''
})
.then((value) => console.log(value))
.then((value) => 5)
.then((value) => console.log(value))
.catch((value) => console.log(value))








