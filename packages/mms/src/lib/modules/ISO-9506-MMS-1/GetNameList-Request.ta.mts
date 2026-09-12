/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectClass, _decode_ObjectClass, _encode_ObjectClass } from "../ISO-9506-MMS-1/ObjectClass.ta.mjs";
// export { ObjectClass, _decode_ObjectClass, _encode_ObjectClass } from "../ISO-9506-MMS-1/ObjectClass.ta.mjs";
import { GetNameList_Request_objectScope, _decode_GetNameList_Request_objectScope, _encode_GetNameList_Request_objectScope } from "../ISO-9506-MMS-1/GetNameList-Request-objectScope.ta.mjs";
// export { GetNameList_Request_objectScope, _decode_GetNameList_Request_objectScope, _encode_GetNameList_Request_objectScope } from "../ISO-9506-MMS-1/GetNameList-Request-objectScope.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetNameList_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetNameList-Request ::= SEQUENCE {
 *    objectClass            [0] ObjectClass,
 *    objectScope            [1] CHOICE {
 *        vmdSpecific            [0] IMPLICIT NULL,
 *        domainSpecific         [1] IMPLICIT Identifier,
 *        aaSpecific             [2] IMPLICIT NULL },
 *        continueAfter       [2] IMPLICIT Identifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetNameList_Request {
    constructor (
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: ObjectClass,
        /**
         * @summary `objectScope`.
         * @public
         * @readonly
         */
        readonly objectScope: GetNameList_Request_objectScope,
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetNameList_Request
     * @description
     * 
     * This takes an `object` and converts it to a `GetNameList_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetNameList_Request`.
     * @returns {GetNameList_Request}
     */
    public static _from_object (_o: { [_K in keyof (GetNameList_Request)]: (GetNameList_Request)[_K] }): GetNameList_Request {
        return new GetNameList_Request(_o.objectClass, _o.objectScope, _o.continueAfter);
    }


}

/**
 * @summary The Leading Root Component Types of GetNameList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetNameList_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("objectClass", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("objectScope", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("continueAfter", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GetNameList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetNameList_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetNameList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetNameList_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetNameList_Request: $.ASN1Decoder<GetNameList_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetNameList_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetNameList_Request (el: _Element): GetNameList_Request {
    if (!_cached_decoder_for_GetNameList_Request) { _cached_decoder_for_GetNameList_Request = function (el: _Element): GetNameList_Request {
    let objectClass!: ObjectClass;
    let objectScope!: GetNameList_Request_objectScope;
    let continueAfter: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "objectClass": (_el: _Element): void => { objectClass = $._decode_explicit<ObjectClass>(() => _decode_ObjectClass)(_el); },
        "objectScope": (_el: _Element): void => { objectScope = $._decode_explicit<GetNameList_Request_objectScope>(() => _decode_GetNameList_Request_objectScope)(_el); },
        "continueAfter": (_el: _Element): void => { continueAfter = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetNameList_Request,
        _extension_additions_list_spec_for_GetNameList_Request,
        _root_component_type_list_2_spec_for_GetNameList_Request,
        undefined,
    );
    return new GetNameList_Request(
        objectClass,
        objectScope,
        continueAfter
    );
}; }
    return _cached_decoder_for_GetNameList_Request(el);
}

let _cached_encoder_for_GetNameList_Request: $.ASN1Encoder<GetNameList_Request> | null = null;

/**
 * @summary Encodes a(n) GetNameList_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetNameList_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetNameList_Request (value: GetNameList_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetNameList_Request) { _cached_encoder_for_GetNameList_Request = function (value: GetNameList_Request, elGetter: $.ASN1Encoder<GetNameList_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectClass, $.BER)(value.objectClass, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GetNameList_Request_objectScope, $.BER)(value.objectScope, $.BER),
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER)(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetNameList_Request(value, elGetter);
}


/* eslint-enable */
