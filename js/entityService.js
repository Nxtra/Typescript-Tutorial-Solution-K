var EntityService = /** @class */ (function () {
    function EntityService() {
        this.items = [];
    }
    EntityService.prototype.add = function (entity) {
        this.items.push(entity);
    };
    EntityService.prototype.get = function (index) {
        return this.items[index];
    };
    EntityService.prototype.getAll = function () {
        return this.items;
    };
    EntityService.prototype.delete = function (index) {
        this.items.splice(index, 1);
    };
    return EntityService;
}());
//# sourceMappingURL=entityService.js.map