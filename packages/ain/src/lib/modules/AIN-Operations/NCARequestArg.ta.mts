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
import { EnvelopeEncodingAuthority, _decode_EnvelopeEncodingAuthority, _encode_EnvelopeEncodingAuthority } from "../AIN-Parameters/EnvelopeEncodingAuthority.ta.mjs";
// export { EnvelopeEncodingAuthority, _decode_EnvelopeEncodingAuthority, _encode_EnvelopeEncodingAuthority } from "../AIN-Parameters/EnvelopeEncodingAuthority.ta.mjs";
import { EnvelopContent, _decode_EnvelopContent, _encode_EnvelopContent } from "../AIN-Parameters/EnvelopContent.ta.mjs";
// export { EnvelopContent, _decode_EnvelopContent, _encode_EnvelopContent } from "../AIN-Parameters/EnvelopContent.ta.mjs";
import { SecurityEnvelope, _decode_SecurityEnvelope, _encode_SecurityEnvelope } from "../AIN-Parameters/SecurityEnvelope.ta.mjs";
// export { SecurityEnvelope, _decode_SecurityEnvelope, _encode_SecurityEnvelope } from "../AIN-Parameters/SecurityEnvelope.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
// export { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";


/**
 * @summary NCARequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NCARequestArg ::= SEQUENCE{
 *             calledPartyID                  CalledPartyID,
 *             callingPartyID                 CallingPartyID,
 *             envelopeEncodingAuthority      EnvelopeEncodingAuthority,
 *             envelopContent                 EnvelopContent,
 *             securityEnvelope               SecurityEnvelope OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             aCGEncountered                 ACGEncountered OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             controlEncountered             ControlEncountered OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class NCARequestArg {
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
         * @summary `envelopeEncodingAuthority`.
         * @public
         * @readonly
         */
        readonly envelopeEncodingAuthority: EnvelopeEncodingAuthority,
        /**
         * @summary `envelopContent`.
         * @public
         * @readonly
         */
        readonly envelopContent: EnvelopContent,
        /**
         * @summary `securityEnvelope`.
         * @public
         * @readonly
         */
        readonly securityEnvelope: OPTIONAL<SecurityEnvelope>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `aCGEncountered`.
         * @public
         * @readonly
         */
        readonly aCGEncountered: OPTIONAL<ACGEncountered>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `controlEncountered`.
         * @public
         * @readonly
         */
        readonly controlEncountered: OPTIONAL<ControlEncountered>
    ) {}

    /**
     * @summary Restructures an object into a NCARequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `NCARequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NCARequestArg`.
     * @returns {NCARequestArg}
     */
    public static _from_object (_o: { [_K in keyof (NCARequestArg)]: (NCARequestArg)[_K] }): NCARequestArg {
        return new NCARequestArg(_o.calledPartyID, _o.callingPartyID, _o.envelopeEncodingAuthority, _o.envelopContent, _o.securityEnvelope, _o.amp1, _o.amp2, _o.aCGEncountered, _o.extensionParameter, _o.controlEncountered);
    }


}

/**
 * @summary The Leading Root Component Types of NCARequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NCARequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyID", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("callingPartyID", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("envelopeEncodingAuthority", false, $.hasTag(_TagClass.context, 98)),
    new $.ComponentSpec("envelopContent", false, $.hasTag(_TagClass.context, 75)),
    new $.ComponentSpec("securityEnvelope", true, $.hasTag(_TagClass.context, 85)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("aCGEncountered", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("controlEncountered", true, $.hasTag(_TagClass.context, 127))
];

/**
 * @summary The Trailing Root Component Types of NCARequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NCARequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NCARequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NCARequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NCARequestArg: $.ASN1Decoder<NCARequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NCARequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NCARequestArg (el: _Element): NCARequestArg {
    if (!_cached_decoder_for_NCARequestArg) { _cached_decoder_for_NCARequestArg = function (el: _Element): NCARequestArg {
    let calledPartyID!: CalledPartyID;
    let callingPartyID!: CallingPartyID;
    let envelopeEncodingAuthority!: EnvelopeEncodingAuthority;
    let envelopContent!: EnvelopContent;
    let securityEnvelope: OPTIONAL<SecurityEnvelope>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let aCGEncountered: OPTIONAL<ACGEncountered>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let controlEncountered: OPTIONAL<ControlEncountered>;
    const callbacks: $.DecodingMap = {
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "envelopeEncodingAuthority": (_el: _Element): void => { envelopeEncodingAuthority = _decode_EnvelopeEncodingAuthority(_el); },
        "envelopContent": (_el: _Element): void => { envelopContent = _decode_EnvelopContent(_el); },
        "securityEnvelope": (_el: _Element): void => { securityEnvelope = _decode_SecurityEnvelope(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "aCGEncountered": (_el: _Element): void => { aCGEncountered = _decode_ACGEncountered(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "controlEncountered": (_el: _Element): void => { controlEncountered = _decode_ControlEncountered(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NCARequestArg,
        _extension_additions_list_spec_for_NCARequestArg,
        _root_component_type_list_2_spec_for_NCARequestArg,
        undefined,
    );
    return new NCARequestArg(
        calledPartyID,
        callingPartyID,
        envelopeEncodingAuthority,
        envelopContent,
        securityEnvelope,
        amp1,
        amp2,
        aCGEncountered,
        extensionParameter,
        controlEncountered
    );
}; }
    return _cached_decoder_for_NCARequestArg(el);
}

let _cached_encoder_for_NCARequestArg: $.ASN1Encoder<NCARequestArg> | null = null;

/**
 * @summary Encodes a(n) NCARequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCARequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_NCARequestArg (value: NCARequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NCARequestArg) { _cached_encoder_for_NCARequestArg = function (value: NCARequestArg, elGetter: $.ASN1Encoder<NCARequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CalledPartyID(value.calledPartyID, $.BER),
            /* REQUIRED   */ _encode_CallingPartyID(value.callingPartyID, $.BER),
            /* REQUIRED   */ _encode_EnvelopeEncodingAuthority(value.envelopeEncodingAuthority, $.BER),
            /* REQUIRED   */ _encode_EnvelopContent(value.envelopContent, $.BER),
            /* IF_ABSENT  */ ((value.securityEnvelope === undefined) ? undefined : _encode_SecurityEnvelope(value.securityEnvelope, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.aCGEncountered === undefined) ? undefined : _encode_ACGEncountered(value.aCGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.controlEncountered === undefined) ? undefined : _encode_ControlEncountered(value.controlEncountered, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NCARequestArg(value, elGetter);
}


/* eslint-enable */
