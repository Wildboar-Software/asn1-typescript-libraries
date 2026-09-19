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
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary CallTypeRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeRequestArg ::= SEQUENCE{
 *         calledPartyID                  CalledPartyID,
 *         callingPartyID                 CallingPartyID,
 *         extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class CallTypeRequestArg {
    constructor (
        /**
         * @summary `calledPartyID`.
         * @public
         * @readonly
         */
        readonly calledPartyID: CalledPartyID,
        /**
         * @summary `callingPartyID`.
         * @public
         * @readonly
         */
        readonly callingPartyID: CallingPartyID,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a CallTypeRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallTypeRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallTypeRequestArg`.
     * @returns {CallTypeRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CallTypeRequestArg)]: (CallTypeRequestArg)[_K] }): CallTypeRequestArg {
        return new CallTypeRequestArg(_o.calledPartyID, _o.callingPartyID, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of CallTypeRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallTypeRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyID", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("callingPartyID", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of CallTypeRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallTypeRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallTypeRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallTypeRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallTypeRequestArg: $.ASN1Decoder<CallTypeRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallTypeRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallTypeRequestArg (el: _Element): CallTypeRequestArg {
    if (!_cached_decoder_for_CallTypeRequestArg) { _cached_decoder_for_CallTypeRequestArg = function (el: _Element): CallTypeRequestArg {
    let calledPartyID!: CalledPartyID;
    let callingPartyID!: CallingPartyID;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallTypeRequestArg,
        _extension_additions_list_spec_for_CallTypeRequestArg,
        _root_component_type_list_2_spec_for_CallTypeRequestArg,
        undefined,
    );
    return new CallTypeRequestArg(
        calledPartyID,
        callingPartyID,
        extensionParameter
    );
}; }
    return _cached_decoder_for_CallTypeRequestArg(el);
}

let _cached_encoder_for_CallTypeRequestArg: $.ASN1Encoder<CallTypeRequestArg> | null = null;

/**
 * @summary Encodes a(n) CallTypeRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTypeRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallTypeRequestArg (value: CallTypeRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallTypeRequestArg) { _cached_encoder_for_CallTypeRequestArg = function (value: CallTypeRequestArg, elGetter: $.ASN1Encoder<CallTypeRequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CalledPartyID(value.calledPartyID, $.BER),
            /* REQUIRED   */ _encode_CallingPartyID(value.callingPartyID, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallTypeRequestArg(value, elGetter);
}


/* eslint-enable */
