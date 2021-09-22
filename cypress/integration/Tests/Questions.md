
# cypress Questions~

## What's the difference between

```js 
cy.get('.pricing-title').eq(0).then(function(el) {
    const elText = el.text()
    expect(elText).equal('BRONZE')
```
## And

```js    
cy.get('h1[class*="pricing-title"]').eq(0).should('have.text','BRONZE')
```

## What's the difference between eq()

```js    
cy.get('h1[class*="pricing-title"]').eq(0)
```

## And nth-child(2)

```js    
cy.get('#product').eq(0).find('tr td:nth-child(2)')
```

## What's the difference between cy.get() and cy.find()


