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
import { NotificationDuration, _decode_NotificationDuration, _encode_NotificationDuration } from "../AIN-Parameters/NotificationDuration.ta.mjs";
// export { NotificationDuration, _decode_NotificationDuration, _encode_NotificationDuration } from "../AIN-Parameters/NotificationDuration.ta.mjs";
import { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
// export { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary ReconnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconnectArg ::= SEQUENCE{
 *             notificationDuration            NotificationDuration OPTIONAL,
 *             controllingLegTreatment         ControllingLegTreatment OPTIONAL,
 *             amp1                            Amp1 OPTIONAL,
 *             amp2                            Amp2 OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class ReconnectArg {
    constructor (
        /**
         * @summary `notificationDuration`.
         * @public
         * @readonly
         */
        readonly notificationDuration: OPTIONAL<NotificationDuration>,
        /**
         * @summary `controllingLegTreatment`.
         * @public
         * @readonly
         */
        readonly controllingLegTreatment: OPTIONAL<ControllingLegTreatment>,
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
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a ReconnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReconnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReconnectArg`.
     * @returns {ReconnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ReconnectArg)]: (ReconnectArg)[_K] }): ReconnectArg {
        return new ReconnectArg(_o.notificationDuration, _o.controllingLegTreatment, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReconnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("notificationDuration", true, $.hasTag(_TagClass.context, 128)),
    new $.ComponentSpec("controllingLegTreatment", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReconnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReconnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReconnectArg: $.ASN1Decoder<ReconnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconnectArg (el: _Element): ReconnectArg {
    if (!_cached_decoder_for_ReconnectArg) { _cached_decoder_for_ReconnectArg = function (el: _Element): ReconnectArg {
    let notificationDuration: OPTIONAL<NotificationDuration>;
    let controllingLegTreatment: OPTIONAL<ControllingLegTreatment>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "notificationDuration": (_el: _Element): void => { notificationDuration = _decode_NotificationDuration(_el); },
        "controllingLegTreatment": (_el: _Element): void => { controllingLegTreatment = _decode_ControllingLegTreatment(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReconnectArg,
        _extension_additions_list_spec_for_ReconnectArg,
        _root_component_type_list_2_spec_for_ReconnectArg,
        undefined,
    );
    return new ReconnectArg(
        notificationDuration,
        controllingLegTreatment,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_ReconnectArg(el);
}

let _cached_encoder_for_ReconnectArg: $.ASN1Encoder<ReconnectArg> | null = null;

/**
 * @summary Encodes a(n) ReconnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReconnectArg (value: ReconnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconnectArg) { _cached_encoder_for_ReconnectArg = function (value: ReconnectArg, elGetter: $.ASN1Encoder<ReconnectArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.notificationDuration === undefined) ? undefined : _encode_NotificationDuration(value.notificationDuration, $.BER)),
            /* IF_ABSENT  */ ((value.controllingLegTreatment === undefined) ? undefined : _encode_ControllingLegTreatment(value.controllingLegTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReconnectArg(value, elGetter);
}


/* eslint-enable */
