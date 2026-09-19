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
import { InvParms, _decode_InvParms, _encode_InvParms } from "../AIN-Parameters/InvParms.ta.mjs";
// export { InvParms, _decode_InvParms, _encode_InvParms } from "../AIN-Parameters/InvParms.ta.mjs";


/**
 * @summary FailedMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailedMessage ::= [57] IMPLICIT SEQUENCE{
 *         opCode      INTEGER,
 *         parameter   OCTET STRING OPTIONAL,
 *         invParms    [1] IMPLICIT InvParms OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class FailedMessage {
    constructor (
        /**
         * @summary `opCode`.
         * @public
         * @readonly
         */
        readonly opCode: INTEGER,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `invParms`.
         * @public
         * @readonly
         */
        readonly invParms: OPTIONAL<InvParms>
    ) {}

    /**
     * @summary Restructures an object into a FailedMessage
     * @description
     * 
     * This takes an `object` and converts it to a `FailedMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FailedMessage`.
     * @returns {FailedMessage}
     */
    public static _from_object (_o: { [_K in keyof (FailedMessage)]: (FailedMessage)[_K] }): FailedMessage {
        return new FailedMessage(_o.opCode, _o.parameter, _o.invParms);
    }


}

/**
 * @summary The Leading Root Component Types of FailedMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FailedMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("opCode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameter", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("invParms", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FailedMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FailedMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FailedMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FailedMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FailedMessage: $.ASN1Decoder<FailedMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailedMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailedMessage (el: _Element): FailedMessage {
    if (!_cached_decoder_for_FailedMessage) { _cached_decoder_for_FailedMessage = $._decode_implicit<FailedMessage>(() => function (el: _Element): FailedMessage {
    let opCode!: INTEGER;
    let parameter: OPTIONAL<OCTET_STRING>;
    let invParms: OPTIONAL<InvParms>;
    const callbacks: $.DecodingMap = {
        "opCode": (_el: _Element): void => { opCode = $._decodeInteger(_el); },
        "parameter": (_el: _Element): void => { parameter = $._decodeOctetString(_el); },
        "invParms": (_el: _Element): void => { invParms = $._decode_implicit<InvParms>(() => _decode_InvParms)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FailedMessage,
        _extension_additions_list_spec_for_FailedMessage,
        _root_component_type_list_2_spec_for_FailedMessage,
        undefined,
    );
    return new FailedMessage(
        opCode,
        parameter,
        invParms
    );
}); }
    return _cached_decoder_for_FailedMessage(el);
}

let _cached_encoder_for_FailedMessage: $.ASN1Encoder<FailedMessage> | null = null;

/**
 * @summary Encodes a(n) FailedMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailedMessage, encoded as an ASN.1 Element.
 */
export
function _encode_FailedMessage (value: FailedMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailedMessage) { _cached_encoder_for_FailedMessage = $._encode_implicit(_TagClass.context, 57, () => function (value: FailedMessage, elGetter: $.ASN1Encoder<FailedMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.opCode, $.BER),
            /* IF_ABSENT  */ ((value.parameter === undefined) ? undefined : $._encodeOctetString(value.parameter, $.BER)),
            /* IF_ABSENT  */ ((value.invParms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InvParms, $.BER)(value.invParms, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_FailedMessage(value, elGetter);
}


/* eslint-enable */
