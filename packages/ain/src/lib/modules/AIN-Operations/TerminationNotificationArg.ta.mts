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
import { EchoData, _decode_EchoData, _encode_EchoData } from "../AIN-Parameters/EchoData.ta.mjs";
// export { EchoData, _decode_EchoData, _encode_EchoData } from "../AIN-Parameters/EchoData.ta.mjs";
import { TerminationIndicator, _decode_TerminationIndicator, _encode_TerminationIndicator } from "../AIN-Parameters/TerminationIndicator.ta.mjs";
// export { TerminationIndicator, _decode_TerminationIndicator, _encode_TerminationIndicator } from "../AIN-Parameters/TerminationIndicator.ta.mjs";
import { ConnectTime, _decode_ConnectTime, _encode_ConnectTime } from "../AIN-Parameters/ConnectTime.ta.mjs";
// export { ConnectTime, _decode_ConnectTime, _encode_ConnectTime } from "../AIN-Parameters/ConnectTime.ta.mjs";
import { BusyCause, _decode_BusyCause, _encode_BusyCause } from "../AIN-Parameters/BusyCause.ta.mjs";
// export { BusyCause, _decode_BusyCause, _encode_BusyCause } from "../AIN-Parameters/BusyCause.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary TerminationNotificationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationNotificationArg ::= SEQUENCE{
 *             echoData                       EchoData,
 *             terminationIndicator           TerminationIndicator,
 *             connectTime                    ConnectTime OPTIONAL,
 *             busyCause                      BusyCause OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class TerminationNotificationArg {
    constructor (
        /**
         * @summary `echoData`.
         * @public
         * @readonly
         */
        readonly echoData: EchoData,
        /**
         * @summary `terminationIndicator`.
         * @public
         * @readonly
         */
        readonly terminationIndicator: TerminationIndicator,
        /**
         * @summary `connectTime`.
         * @public
         * @readonly
         */
        readonly connectTime: OPTIONAL<ConnectTime>,
        /**
         * @summary `busyCause`.
         * @public
         * @readonly
         */
        readonly busyCause: OPTIONAL<BusyCause>,
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
     * @summary Restructures an object into a TerminationNotificationArg
     * @description
     * 
     * This takes an `object` and converts it to a `TerminationNotificationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminationNotificationArg`.
     * @returns {TerminationNotificationArg}
     */
    public static _from_object (_o: { [_K in keyof (TerminationNotificationArg)]: (TerminationNotificationArg)[_K] }): TerminationNotificationArg {
        return new TerminationNotificationArg(_o.echoData, _o.terminationIndicator, _o.connectTime, _o.busyCause, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of TerminationNotificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminationNotificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("echoData", false, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("terminationIndicator", false, $.hasTag(_TagClass.context, 67)),
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("busyCause", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of TerminationNotificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminationNotificationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminationNotificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminationNotificationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminationNotificationArg: $.ASN1Decoder<TerminationNotificationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationNotificationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationNotificationArg (el: _Element): TerminationNotificationArg {
    if (!_cached_decoder_for_TerminationNotificationArg) { _cached_decoder_for_TerminationNotificationArg = function (el: _Element): TerminationNotificationArg {
    let echoData!: EchoData;
    let terminationIndicator!: TerminationIndicator;
    let connectTime: OPTIONAL<ConnectTime>;
    let busyCause: OPTIONAL<BusyCause>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "echoData": (_el: _Element): void => { echoData = _decode_EchoData(_el); },
        "terminationIndicator": (_el: _Element): void => { terminationIndicator = _decode_TerminationIndicator(_el); },
        "connectTime": (_el: _Element): void => { connectTime = _decode_ConnectTime(_el); },
        "busyCause": (_el: _Element): void => { busyCause = _decode_BusyCause(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TerminationNotificationArg,
        _extension_additions_list_spec_for_TerminationNotificationArg,
        _root_component_type_list_2_spec_for_TerminationNotificationArg,
        undefined,
    );
    return new TerminationNotificationArg(
        echoData,
        terminationIndicator,
        connectTime,
        busyCause,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_TerminationNotificationArg(el);
}

let _cached_encoder_for_TerminationNotificationArg: $.ASN1Encoder<TerminationNotificationArg> | null = null;

/**
 * @summary Encodes a(n) TerminationNotificationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationNotificationArg, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationNotificationArg (value: TerminationNotificationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationNotificationArg) { _cached_encoder_for_TerminationNotificationArg = function (value: TerminationNotificationArg, elGetter: $.ASN1Encoder<TerminationNotificationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EchoData(value.echoData, $.BER),
            /* REQUIRED   */ _encode_TerminationIndicator(value.terminationIndicator, $.BER),
            /* IF_ABSENT  */ ((value.connectTime === undefined) ? undefined : _encode_ConnectTime(value.connectTime, $.BER)),
            /* IF_ABSENT  */ ((value.busyCause === undefined) ? undefined : _encode_BusyCause(value.busyCause, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminationNotificationArg(value, elGetter);
}


/* eslint-enable */
