---
id: all
title: All ASN.1 TypeScript Libraries
---

Regardless of the subject matter, all ASN.1 TypeScript libraries produced by
[Wildboar Software](https://wildboarsoftware.com/en)'s
[ASN.1 Compiler](https://wildboarsoftware.com/en/asn1-compilation) follow these
similar patterns. There would be so much redundant documentation if there were
documentation for every TypeScript ASN.1 library.

## How ASN.1 Values are Represented

ASN.1 values encoded and decoded in this library are represented (mostly)
according to the [asn1-ts](https://www.npmjs.com/package/asn1-ts)
TypeScript library. For the sake of not duplicating documentation (and
potentially being out-of-sync), see the above library's documentation for, say,
how the ASN.1 TypeScript libraries output by the ASN.1 compiler represent a
`BIT STRING` or an `INTEGER`.

## How ASN.1 Types are Represented

As with ASN.1 values, ASN.1 types are mostly represented according to the macros
in the [asn1-ts](https://www.npmjs.com/package/asn1-ts) TypeScript library.
However, there are exceptions, which are documented here.

### Integers

Integers with or without constraints, but without named integer values, are
represented simply as a `number`. If named integer values are present, these are
also compiled as values of that integer. For instance, the following type from
the ITU Recommendation X.511:

```asn1
AbandonProblem  ::=  INTEGER {
  noSuchOperation (1),
  tooLate         (2),
  cannotAbandon   (3) }
```

gets compiled to:

```typescript
export type AbandonProblem = INTEGER;
export const AbandonProblem_noSuchOperation: AbandonProblem = 1;
export const noSuchOperation: AbandonProblem = AbandonProblem_noSuchOperation;
export const AbandonProblem_tooLate: AbandonProblem = 2;
export const tooLate: AbandonProblem = AbandonProblem_tooLate;
export const AbandonProblem_cannotAbandon: AbandonProblem = 3;
export const cannotAbandon: AbandonProblem = AbandonProblem_cannotAbandon;
```

(Note that the above was cleaned up a bit for readability.)

### Bit Strings

Bit String types with or without constraints or named bits are represented as a
`Uint8ClampedArray` with each byte corresponding to a bit and having value `1`
if the bit is set or `0` if the bit is not set. If named values are present,
these are compiled separately, just like with `INTEGER`.

This ASN.1 definition:

```asn1
ClassList ::= BIT STRING {
  unmarked      (0),
  unclassified  (1),
  restricted    (2),
  confidential  (3),
  secret        (4),
  topSecret     (5)}
```

would be compiled into this TypeScript:

```typescript
export type ClassList = BIT_STRING;
export const ClassList_unmarked: number = 0;
export const unmarked: number = ClassList_unmarked;
export const ClassList_unclassified: number = 1;
export const unclassified: number = ClassList_unclassified;
export const ClassList_restricted: number = 2;
export const restricted: number = ClassList_restricted;
export const ClassList_confidential: number = 3;
export const confidential: number = ClassList_confidential;
export const ClassList_secret: number = 4;
export const secret: number = ClassList_secret;
export const ClassList_topSecret: number = 5;
export const topSecret: number = ClassList_topSecret;
```

(Note that the above was cleaned up a bit for readability.)

### Enumerated Types

How an `ENUMERATED` type depends on whether it is extensible, as indicated by
the presence of an ellipsis (`...`) or by the key phrase in the module
`EXTENSIBILITY IMPLIED`. The main difference is that, when it is extensible,
the enumerated type will be a union of an enum _and_ a number (to support
yet undefined alternatives).

The following ASN.1 describing a _non-extensible_ `ENUMERATED` type:

```asn1
ObjectClassKind ::= ENUMERATED {
  abstract   (0),
  structural (1),
  auxiliary  (2)}
```

would be compiled into this TypeScript:

```typescript
export enum _enum_for_ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}
export type ObjectClassKind = _enum_for_ObjectClassKind;
export const ObjectClassKind = _enum_for_ObjectClassKind;
export const ObjectClassKind_abstract: ObjectClassKind = ObjectClassKind.abstract;
export const abstract: ObjectClassKind = ObjectClassKind.abstract;
export const ObjectClassKind_structural: ObjectClassKind = ObjectClassKind.structural;
export const structural: ObjectClassKind = ObjectClassKind.structural;
export const ObjectClassKind_auxiliary: ObjectClassKind = ObjectClassKind.auxiliary;
export const auxiliary: ObjectClassKind = ObjectClassKind.auxiliary;
```

(Note that the above was cleaned up a bit for readability.)

The following ASN.1 describing an _extensible_ `ENUMERATED` type:

```asn1
AVMPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
```

would be compiled into this TypeScript:

```typescript
export enum _enum_for_AVMPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
export type AVMPversion = _enum_for_AVMPversion | ENUMERATED; // <- This is the key difference.
export const AVMPversion_v1: AVMPversion = 1;
export const v1: AVMPversion = AVMPversion_v1;
export const AVMPversion_v2: AVMPversion = 2;
export const v2: AVMPversion = AVMPversion_v2;
export const AVMPversion_v3: AVMPversion = 3;
export const v3: AVMPversion = AVMPversion_v3;
```

(Note that the above was cleaned up a bit for readability.)

### Structured Types

Structured types, such as `SEQUENCE` and `SET` types, are represented as
classes. So, for instance, the following ASN.1 from the LDAP specification,
IETF RFC 4511:

```asn1
ModifyDNRequest ::= [APPLICATION 12]  SEQUENCE {
  entry         LDAPDN,
  newrdn        RelativeLDAPDN,
  deleteoldrdn  BOOLEAN,
  newSuperior   [0]  LDAPDN OPTIONAL
}
```

will be compiled to TypeScript as:

```typescript
export class ModifyDNRequest {
  constructor(
    readonly entry: LDAPDN,
    readonly newrdn: RelativeLDAPDN,
    readonly deleteoldrdn: BOOLEAN,
    readonly newSuperior: OPTIONAL<LDAPDN>,
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}
  public static _from_object(
    _o: { [_K in keyof ModifyDNRequest]: ModifyDNRequest[_K] }
  ): ModifyDNRequest {
    return new ModifyDNRequest(
      _o.entry,
      _o.newrdn,
      _o.deleteoldrdn,
      _o.newSuperior,
      _o._unrecognizedExtensionsList
    );
  }
}
```

Each structured object class has the static method `_from_object` which can be
used to decode a plain object into an instance of the class.

### Choice Types

`CHOICE` types are represented as
[discriminated unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions).

For instance, this ASN.1 definition from ITU Recommendation X.509:

```asn1
GeneralName ::= CHOICE {
  otherName                  [0]  INSTANCE OF OTHER-NAME,
  rfc822Name                 [1]  IA5String,
  dNSName                    [2]  IA5String,
  x400Address                [3]  ORAddress,
  directoryName              [4]  Name,
  ediPartyName               [5]  EDIPartyName,
  uniformResourceIdentifier  [6]  IA5String,
  iPAddress                  [7]  OCTET STRING,
  registeredID               [8]  OBJECT IDENTIFIER,
  ... }
```

Would get compiled to this TypeScript:

```typescript
export type GeneralName =
    | { otherName: INSTANCE_OF }
    | { rfc822Name: IA5String }
    | { dNSName: IA5String }
    | { x400Address: ORAddress }
    | { directoryName: Name }
    | { ediPartyName: EDIPartyName }
    | { uniformResourceIdentifier: IA5String }
    | { iPAddress: OCTET_STRING }
    | { registeredID: OBJECT_IDENTIFIER }
    | _Element;
```

(Note that the above was cleaned up a bit for readability.)

This means that, after decoding, you can determine (in a type-safe manner) which
alternative was taken, like so:

```typescript
if ("directoryName" in gn) { // "gn" is of type GeneralName.
    console.log(gn.directoryName.rdnSequence); // This will be defined.
}
```

### Set Of / Sequence Of

`SET OF T` and `SEQUENCE OF T` types are represented as arrays of `T`. So the
following ASN.1:

```asn1
RelativeDistinguishedName ::= SET SIZE (1..MAX) OF AttributeTypeAndValue
```

would get compiled to the following TypeScript:

```typescript
export type RelativeDistinguishedName = AttributeTypeAndValue[];
```

## Object Classes

Object classes are compiled to an interface. This interface will contain the
ampersand-prefixed setting names. So this ASN.1 information object class from
ITU Recommendation X.501:

```asn1
CONTEXT ::= CLASS {
  &Type,
  &defaultValue   &Type OPTIONAL,
  &Assertion      OPTIONAL,
  &absentMatch    BOOLEAN DEFAULT TRUE,
  &id             OBJECT IDENTIFIER UNIQUE }
WITH SYNTAX {
  WITH SYNTAX     &Type
  [DEFAULT-VALUE  &defaultValue]
  [ASSERTED AS    &Assertion]
  [ABSENT-MATCH   &absentMatch]
  ID              &id }
```

will get compiled into the following TypeScript:

```typescript
export interface CONTEXT<Type = any, Assertion = any> {
    readonly class: "CONTEXT";
    readonly decoderFor: Partial<
        {
            [_K in keyof CONTEXT<Type, Assertion>]: $.ASN1Decoder<
                CONTEXT<Type, Assertion>[_K]
            >;
        }
    >;
    readonly encoderFor: Partial<
        {
            [_K in keyof CONTEXT<Type, Assertion>]: $.ASN1Encoder<
                CONTEXT<Type, Assertion>[_K]
            >;
        }
    >;
    readonly "&Type": Type;
    readonly "&defaultValue"?: CONTEXT["&Type"];
    readonly "&Assertion": Assertion;
    readonly "&absentMatch"?: BOOLEAN;
    readonly "&id": OBJECT_IDENTIFIER;
}
```

You will notice that the above has a few properties that the `CONTEXT`
information object class _does not_ have: `class`, `decoderFor`, and
`encoderFor`.

`class` contains the name of the object class as a constant so that, even when
transpiled into JavaScript, the object class represented by an object can still
be determined. (When TypeScript is transpiled to JavaScript, interfaces
completely disappear, because JavaScript has no concept of an "interface," so
you might want some way of determining the object class represented by a plain
JavaScript object.)

`decoderFor` and `encoderFor` have, as values, objects whose keys are the names
of the type fields of the object class, and whose values are functions for
decoding and encoding the types identified by those type fields, respectively.

You will notice that the above `CONTEXT` object class becomes compiled into a
generic interface. The type parameters are for the fields of the object class
that are type fields.

## Objects

ASN.1 information objects will be compiled into instances of the interface that
is produced by the compilation of the information object class assignment.

```asn1
temporalContext CONTEXT ::= {
  WITH SYNTAX  TimeSpecification
  ASSERTED AS  TimeAssertion
  ID           id-avc-temporal }
```

will get compiled into the following TypeScript:

```typescript
export const temporalContext: CONTEXT<TimeSpecification, TimeAssertion> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_TimeSpecification,
        "&Assertion": _decode_TimeAssertion,
    },
    encoderFor: {
        "&Type": _encode_TimeSpecification,
        "&Assertion": _encode_TimeAssertion,
    },
    "&id": id_avc_temporal,
    "&Type": 0 as never,
    "&Assertion": 0 as never,
    "&absentMatch": false,
};
```

Note that the object class `CONTEXT` is generic, and the type parameters are
used to populate the type fields with `TimeSpecification` and `TimeAssertion`.
However, types are not values: when TypeScript is compiled to JavaScript, types
disappear. For this reason, the type fields for this object actually have values
of `0`, which is cast to `never` to simply ignore type checking. Type fields
won't have a value; they are only a construct for TypeScript to use. If you
reference these types via `CONTEXT["&Assertion"]` for instance, you will
retrieve the data type `TimeAssertion`.

Also note that the `class`, `decoderFor` and `encoderFor` fields are populated
as described above for information object classes. You can decode the assertion
type of `temporalContext` like so:

```typescript
// asn1Element is of type ASN1Element. (See the asn1-ts library.)
const assertion: TimeAssertion = temporalContext.decoderFor["&Assertion"]!(asn1Element);
```

Encode using this field like so (the following example encodes using the
Distinguished Encoding Rules):

```typescript
// assertion is of type TimeAssertion.
const DER = () => new DERElement(); // The function used by the encoder to spawn ASN.1 elements.
const encoded: DERElement = temporalContext.encoderFor["&Assertion"]!(assertion, DER);
// Convert to bytes using encoded.toBytes().
```

## Value Sets

Value sets are just encoded as an array of values.

## Object Sets

Object sets are encoded as an array of objects.

## Encoding and Decoding

For every type assignment, there will be at least two functions having names of
the format `_encode_TYPE` and `_decode_TYPE` where `TYPE` is replaced with the
name of the type. The decoder simply takes an `ASN1Element` (see the `asn1-ts`
library) and returns the data type represented by `TYPE` (if what is encoded
is actually a correctly-encoded ASN.1 element). The encoder takes the type
represented by `TYPE` as a first parameter, and a function that returns an
`ASN1Element`, which is used for spawning ASN.1 elements of the desired codec
for the encoding.

The following ASN.1

```asn1
AlgorithmIdentifier{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
  algorithm       ALGORITHM.&id({SupportedAlgorithms}),
  parameters      ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
  ... }
```

would be produce two functions (in addition to the type definition):
`_encode_AlgorithmIdentifier` and `_decode_AlgorithmIdentifier`. You can
encode an `AlgorithmIdentifier` like so:

```typescript
// ai is of type AlgorithmIdentifier
const DER = () => new DERElement();
const encoded: DERElement = _encode_AlgorithmIdentifier(ai, DER);
```

And decoding it would look like this:

```typescript
// encoded is of type DERElement, which is a subclass of ASN1Element.
const decoded: AlgorithmIdentifier = _decode_AlgorithmIdentifier(encoded);
console.log(decoded.algorithm);
console.log(decoded.parameters);
```

The symbols `DER`, `BER`, and `CER` exported from `asn1-ts/dist/functional.mjs`
are aliases for `() => new DERElement()` et. al.
