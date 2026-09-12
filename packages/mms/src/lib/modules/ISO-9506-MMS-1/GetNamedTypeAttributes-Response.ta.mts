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
import { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";
// export { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetNamedTypeAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetNamedTypeAttributes-Response ::= SEQUENCE {
 *    mmsDeletable               [0] IMPLICIT BOOLEAN,
 *    typeSpecification          TypeSpecification
 * ,  accessControlList          [1] IMPLICIT Identifier OPTIONAL
 *                  -- Shall not appear in minor version one or two
 * ,  meaning                    [4] IMPLICIT VisibleString OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class GetNamedTypeAttributes_Response {
    constructor (
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `typeSpecification`.
         * @public
         * @readonly
         */
        readonly typeSpecification: TypeSpecification,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>,
        /**
         * @summary `meaning`.
         * @public
         * @readonly
         */
        readonly meaning: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a GetNamedTypeAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetNamedTypeAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetNamedTypeAttributes_Response`.
     * @returns {GetNamedTypeAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetNamedTypeAttributes_Response)]: (GetNamedTypeAttributes_Response)[_K] }): GetNamedTypeAttributes_Response {
        return new GetNamedTypeAttributes_Response(_o.mmsDeletable, _o.typeSpecification, _o.accessControlList, _o.meaning);
    }


}

/**
 * @summary The Leading Root Component Types of GetNamedTypeAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetNamedTypeAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeSpecification", false, $.hasAnyTag),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("meaning", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of GetNamedTypeAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetNamedTypeAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetNamedTypeAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetNamedTypeAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetNamedTypeAttributes_Response: $.ASN1Decoder<GetNamedTypeAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetNamedTypeAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetNamedTypeAttributes_Response (el: _Element): GetNamedTypeAttributes_Response {
    if (!_cached_decoder_for_GetNamedTypeAttributes_Response) { _cached_decoder_for_GetNamedTypeAttributes_Response = function (el: _Element): GetNamedTypeAttributes_Response {
    let mmsDeletable!: BOOLEAN;
    let typeSpecification!: TypeSpecification;
    let accessControlList: OPTIONAL<Identifier>;
    let meaning: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "typeSpecification": (_el: _Element): void => { typeSpecification = _decode_TypeSpecification(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "meaning": (_el: _Element): void => { meaning = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetNamedTypeAttributes_Response,
        _extension_additions_list_spec_for_GetNamedTypeAttributes_Response,
        _root_component_type_list_2_spec_for_GetNamedTypeAttributes_Response,
        undefined,
    );
    return new GetNamedTypeAttributes_Response(
        mmsDeletable,
        typeSpecification,
        accessControlList,
        meaning
    );
}; }
    return _cached_decoder_for_GetNamedTypeAttributes_Response(el);
}

let _cached_encoder_for_GetNamedTypeAttributes_Response: $.ASN1Encoder<GetNamedTypeAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetNamedTypeAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetNamedTypeAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetNamedTypeAttributes_Response (value: GetNamedTypeAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetNamedTypeAttributes_Response) { _cached_encoder_for_GetNamedTypeAttributes_Response = function (value: GetNamedTypeAttributes_Response, elGetter: $.ASN1Encoder<GetNamedTypeAttributes_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* REQUIRED   */ _encode_TypeSpecification(value.typeSpecification, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER)),
            /* IF_ABSENT  */ ((value.meaning === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.meaning, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetNamedTypeAttributes_Response(value, elGetter);
}


/* eslint-enable */
