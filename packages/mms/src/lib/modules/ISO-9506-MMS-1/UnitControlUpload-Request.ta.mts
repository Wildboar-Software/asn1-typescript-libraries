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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { UnitControlUpload_Request_continueAfter, _decode_UnitControlUpload_Request_continueAfter, _encode_UnitControlUpload_Request_continueAfter } from "../ISO-9506-MMS-1/UnitControlUpload-Request-continueAfter.ta.mjs";
// export { UnitControlUpload_Request_continueAfter, _decode_UnitControlUpload_Request_continueAfter, _encode_UnitControlUpload_Request_continueAfter } from "../ISO-9506-MMS-1/UnitControlUpload-Request-continueAfter.ta.mjs";


/**
 * @summary UnitControlUpload_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitControlUpload-Request ::= SEQUENCE {
 *     unitControlName        [0] IMPLICIT Identifier, -- Unit Control Name
 *     continueAfter          CHOICE {
 *         domain                 [1] IMPLICIT Identifier,
 *         ulsmID                 [2] IMPLICIT INTEGER,
 *         programInvocation      [3] IMPLICIT Identifier    } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UnitControlUpload_Request {
    constructor (
        /**
         * @summary `unitControlName`.
         * @public
         * @readonly
         */
        readonly unitControlName: Identifier,
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<UnitControlUpload_Request_continueAfter>
    ) {}

    /**
     * @summary Restructures an object into a UnitControlUpload_Request
     * @description
     * 
     * This takes an `object` and converts it to a `UnitControlUpload_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnitControlUpload_Request`.
     * @returns {UnitControlUpload_Request}
     */
    public static _from_object (_o: { [_K in keyof (UnitControlUpload_Request)]: (UnitControlUpload_Request)[_K] }): UnitControlUpload_Request {
        return new UnitControlUpload_Request(_o.unitControlName, _o.continueAfter);
    }


}

/**
 * @summary The Leading Root Component Types of UnitControlUpload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnitControlUpload_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("unitControlName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("continueAfter", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)))
];

/**
 * @summary The Trailing Root Component Types of UnitControlUpload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnitControlUpload_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnitControlUpload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnitControlUpload_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UnitControlUpload_Request: $.ASN1Decoder<UnitControlUpload_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitControlUpload_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnitControlUpload_Request (el: _Element): UnitControlUpload_Request {
    if (!_cached_decoder_for_UnitControlUpload_Request) { _cached_decoder_for_UnitControlUpload_Request = function (el: _Element): UnitControlUpload_Request {
    let unitControlName!: Identifier;
    let continueAfter: OPTIONAL<UnitControlUpload_Request_continueAfter>;
    const callbacks: $.DecodingMap = {
        "unitControlName": (_el: _Element): void => { unitControlName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "continueAfter": (_el: _Element): void => { continueAfter = _decode_UnitControlUpload_Request_continueAfter(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnitControlUpload_Request,
        _extension_additions_list_spec_for_UnitControlUpload_Request,
        _root_component_type_list_2_spec_for_UnitControlUpload_Request,
        undefined,
    );
    return new UnitControlUpload_Request(
        unitControlName,
        continueAfter
    );
}; }
    return _cached_decoder_for_UnitControlUpload_Request(el);
}

let _cached_encoder_for_UnitControlUpload_Request: $.ASN1Encoder<UnitControlUpload_Request> | null = null;

/**
 * @summary Encodes a(n) UnitControlUpload_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitControlUpload_Request, encoded as an ASN.1 Element.
 */
export
function _encode_UnitControlUpload_Request (value: UnitControlUpload_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnitControlUpload_Request) { _cached_encoder_for_UnitControlUpload_Request = function (value: UnitControlUpload_Request, elGetter: $.ASN1Encoder<UnitControlUpload_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.unitControlName, $.BER),
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : _encode_UnitControlUpload_Request_continueAfter(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UnitControlUpload_Request(value, elGetter);
}


/* eslint-enable */
