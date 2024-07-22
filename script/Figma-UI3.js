$httpClient.get($request.url, function(error, response, data) {
  if (error) {
    console.log('Error fetching URL:', error);
    $done({});
  } else {
    console.log('URL fetched successfully:', $request.url);
    if ($request.url.includes('figma_app-') && $request.url.includes('.min.js.br') && !$request.url.includes('runtime~figma_app')) {
      console.log('URL matches pattern');
      let modifiedContent = data.replace(/e\?"ui3":"ui2"/g, '"ui3"');
      modifiedContent = modifiedContent.replace(/c\(e\)?"ui3":"ui2"/g, '"ui3"');
      modifiedContent = modifiedContent.replace(/version:"ui2",/g, 'version:"ui3",');
      modifiedContent = modifiedContent.replace(/initialVersion:a="ui2"}\)/g, 'initialVersion:a="ui3"})');
      modifiedContent = modifiedContent.replace(/"ui2"===o.version/g, "false");
      console.log('Content modified');
      $done({body: modifiedContent});
    } else {
      console.log('URL does not match pattern');
      $done({body: data});
    }
  }
});