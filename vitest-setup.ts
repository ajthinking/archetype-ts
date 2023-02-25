expect.extend({
    toBeCool(received) {
        const { isNot } = this;
        return {
            pass: received.cool === "foo",
            message: () => `Not cool`,
        };
    },
});
