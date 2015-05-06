var store = keigai.store();
 
store.setUri("data.json").then(function (recs) {
	riot.mount('narrative', {
		items: recs
	})
}, function (err) {
	// handle err
});