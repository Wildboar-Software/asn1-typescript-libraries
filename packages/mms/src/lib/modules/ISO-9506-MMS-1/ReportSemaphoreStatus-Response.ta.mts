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
import { ReportSemaphoreStatus_Response_class, ReportSemaphoreStatus_Response_class_token /* IMPORTED_LONG_NAMED_INTEGER */, token /* IMPORTED_SHORT_NAMED_INTEGER */, ReportSemaphoreStatus_Response_class_pool /* IMPORTED_LONG_NAMED_INTEGER */, pool /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ReportSemaphoreStatus_Response_class, _encode_ReportSemaphoreStatus_Response_class } from "../ISO-9506-MMS-1/ReportSemaphoreStatus-Response-class.ta.mjs";
// export { ReportSemaphoreStatus_Response_class, ReportSemaphoreStatus_Response_class_token /* IMPORTED_LONG_NAMED_INTEGER */, token /* IMPORTED_SHORT_NAMED_INTEGER */, ReportSemaphoreStatus_Response_class_pool /* IMPORTED_LONG_NAMED_INTEGER */, pool /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ReportSemaphoreStatus_Response_class, _encode_ReportSemaphoreStatus_Response_class } from "../ISO-9506-MMS-1/ReportSemaphoreStatus-Response-class.ta.mjs";
import { Unsigned16, _decode_Unsigned16, _encode_Unsigned16 } from "../ISO-9506-MMS-1/Unsigned16.ta.mjs";
// export { Unsigned16, _decode_Unsigned16, _encode_Unsigned16 } from "../ISO-9506-MMS-1/Unsigned16.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ReportSemaphoreStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreStatus-Response ::= SEQUENCE {
 *    mmsDeletable                  [0] IMPLICIT BOOLEAN,
 *    class                         [1] IMPLICIT INTEGER {
 *           token                      (0),
 *           pool                       (1)    } (0..1),
 *    numberOfTokens                [2] IMPLICIT Unsigned16,
 *    numberOfOwnedTokens           [3] IMPLICIT Unsigned16,
 *    numberOfHungTokens            [4] IMPLICIT Unsigned16
 * ,  accessControlList             [5] IMPLICIT Identifier OPTIONAL
 *                     -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class ReportSemaphoreStatus_Response {
    constructor (
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: ReportSemaphoreStatus_Response_class,
        /**
         * @summary `numberOfTokens`.
         * @public
         * @readonly
         */
        readonly numberOfTokens: Unsigned16,
        /**
         * @summary `numberOfOwnedTokens`.
         * @public
         * @readonly
         */
        readonly numberOfOwnedTokens: Unsigned16,
        /**
         * @summary `numberOfHungTokens`.
         * @public
         * @readonly
         */
        readonly numberOfHungTokens: Unsigned16,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a ReportSemaphoreStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportSemaphoreStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportSemaphoreStatus_Response`.
     * @returns {ReportSemaphoreStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportSemaphoreStatus_Response)]: (ReportSemaphoreStatus_Response)[_K] }): ReportSemaphoreStatus_Response {
        return new ReportSemaphoreStatus_Response(_o.mmsDeletable, _o.class_, _o.numberOfTokens, _o.numberOfOwnedTokens, _o.numberOfHungTokens, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of ReportSemaphoreStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportSemaphoreStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfTokens", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("numberOfOwnedTokens", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("numberOfHungTokens", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ReportSemaphoreStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportSemaphoreStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportSemaphoreStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportSemaphoreStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportSemaphoreStatus_Response: $.ASN1Decoder<ReportSemaphoreStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSemaphoreStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSemaphoreStatus_Response (el: _Element): ReportSemaphoreStatus_Response {
    if (!_cached_decoder_for_ReportSemaphoreStatus_Response) { _cached_decoder_for_ReportSemaphoreStatus_Response = function (el: _Element): ReportSemaphoreStatus_Response {
    let mmsDeletable!: BOOLEAN;
    let class_!: ReportSemaphoreStatus_Response_class;
    let numberOfTokens!: Unsigned16;
    let numberOfOwnedTokens!: Unsigned16;
    let numberOfHungTokens!: Unsigned16;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<ReportSemaphoreStatus_Response_class>(() => _decode_ReportSemaphoreStatus_Response_class)(_el); },
        "numberOfTokens": (_el: _Element): void => { numberOfTokens = $._decode_implicit<Unsigned16>(() => _decode_Unsigned16)(_el); },
        "numberOfOwnedTokens": (_el: _Element): void => { numberOfOwnedTokens = $._decode_implicit<Unsigned16>(() => _decode_Unsigned16)(_el); },
        "numberOfHungTokens": (_el: _Element): void => { numberOfHungTokens = $._decode_implicit<Unsigned16>(() => _decode_Unsigned16)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportSemaphoreStatus_Response,
        _extension_additions_list_spec_for_ReportSemaphoreStatus_Response,
        _root_component_type_list_2_spec_for_ReportSemaphoreStatus_Response,
        undefined,
    );
    return new ReportSemaphoreStatus_Response(
        mmsDeletable,
        class_,
        numberOfTokens,
        numberOfOwnedTokens,
        numberOfHungTokens,
        accessControlList
    );
}; }
    return _cached_decoder_for_ReportSemaphoreStatus_Response(el);
}

let _cached_encoder_for_ReportSemaphoreStatus_Response: $.ASN1Encoder<ReportSemaphoreStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportSemaphoreStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSemaphoreStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSemaphoreStatus_Response (value: ReportSemaphoreStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSemaphoreStatus_Response) { _cached_encoder_for_ReportSemaphoreStatus_Response = function (value: ReportSemaphoreStatus_Response, elGetter: $.ASN1Encoder<ReportSemaphoreStatus_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReportSemaphoreStatus_Response_class, $.BER)(value.class_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Unsigned16, $.BER)(value.numberOfTokens, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned16, $.BER)(value.numberOfOwnedTokens, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Unsigned16, $.BER)(value.numberOfHungTokens, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportSemaphoreStatus_Response(value, elGetter);
}


/* eslint-enable */
