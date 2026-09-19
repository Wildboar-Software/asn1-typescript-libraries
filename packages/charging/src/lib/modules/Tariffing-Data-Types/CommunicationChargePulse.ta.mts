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
import { PulseUnits, _decode_PulseUnits, _encode_PulseUnits } from "../Tariffing-Data-Types/PulseUnits.ta.mjs";
// export { PulseUnits, _decode_PulseUnits, _encode_PulseUnits } from "../Tariffing-Data-Types/PulseUnits.ta.mjs";
import { ChargeUnitTimeInterval, _decode_ChargeUnitTimeInterval, _encode_ChargeUnitTimeInterval } from "../Tariffing-Data-Types/ChargeUnitTimeInterval.ta.mjs";
// export { ChargeUnitTimeInterval, _decode_ChargeUnitTimeInterval, _encode_ChargeUnitTimeInterval } from "../Tariffing-Data-Types/ChargeUnitTimeInterval.ta.mjs";
import { TariffDuration, _decode_TariffDuration, _encode_TariffDuration } from "../Tariffing-Data-Types/TariffDuration.ta.mjs";
// export { TariffDuration, _decode_TariffDuration, _encode_TariffDuration } from "../Tariffing-Data-Types/TariffDuration.ta.mjs";


/**
 * @summary CommunicationChargePulse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationChargePulse ::= SEQUENCE {
 *     pulseUnits                [0] PulseUnits ,
 *     chargeUnitTimeInterval    [1] ChargeUnitTimeInterval ,
 *     tariffDuration            [2] TariffDuration }
 * ```
 * 
 * @class
 */
export
class CommunicationChargePulse {
    constructor (
        /**
         * @summary `pulseUnits`.
         * @public
         * @readonly
         */
        readonly pulseUnits: PulseUnits,
        /**
         * @summary `chargeUnitTimeInterval`.
         * @public
         * @readonly
         */
        readonly chargeUnitTimeInterval: ChargeUnitTimeInterval,
        /**
         * @summary `tariffDuration`.
         * @public
         * @readonly
         */
        readonly tariffDuration: TariffDuration
    ) {}

    /**
     * @summary Restructures an object into a CommunicationChargePulse
     * @description
     * 
     * This takes an `object` and converts it to a `CommunicationChargePulse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommunicationChargePulse`.
     * @returns {CommunicationChargePulse}
     */
    public static _from_object (_o: { [_K in keyof (CommunicationChargePulse)]: (CommunicationChargePulse)[_K] }): CommunicationChargePulse {
        return new CommunicationChargePulse(_o.pulseUnits, _o.chargeUnitTimeInterval, _o.tariffDuration);
    }


}

/**
 * @summary The Leading Root Component Types of CommunicationChargePulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommunicationChargePulse: $.ComponentSpec[] = [
    new $.ComponentSpec("pulseUnits", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargeUnitTimeInterval", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tariffDuration", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommunicationChargePulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommunicationChargePulse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommunicationChargePulse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommunicationChargePulse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommunicationChargePulse: $.ASN1Decoder<CommunicationChargePulse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationChargePulse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationChargePulse (el: _Element): CommunicationChargePulse {
    if (!_cached_decoder_for_CommunicationChargePulse) { _cached_decoder_for_CommunicationChargePulse = function (el: _Element): CommunicationChargePulse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CommunicationChargePulse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pulseUnits";
    sequence[1].name = "chargeUnitTimeInterval";
    sequence[2].name = "tariffDuration";
    let pulseUnits!: PulseUnits;
    let chargeUnitTimeInterval!: ChargeUnitTimeInterval;
    let tariffDuration!: TariffDuration;
    pulseUnits = $._decode_implicit<PulseUnits>(() => _decode_PulseUnits)(sequence[0]);
    chargeUnitTimeInterval = $._decode_implicit<ChargeUnitTimeInterval>(() => _decode_ChargeUnitTimeInterval)(sequence[1]);
    tariffDuration = $._decode_implicit<TariffDuration>(() => _decode_TariffDuration)(sequence[2]);
    return new CommunicationChargePulse(
        pulseUnits,
        chargeUnitTimeInterval,
        tariffDuration,

    );
}; }
    return _cached_decoder_for_CommunicationChargePulse(el);
}

let _cached_encoder_for_CommunicationChargePulse: $.ASN1Encoder<CommunicationChargePulse> | null = null;

/**
 * @summary Encodes a(n) CommunicationChargePulse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationChargePulse, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationChargePulse (value: CommunicationChargePulse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationChargePulse) { _cached_encoder_for_CommunicationChargePulse = function (value: CommunicationChargePulse, elGetter: $.ASN1Encoder<CommunicationChargePulse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PulseUnits, $.BER)(value.pulseUnits, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ChargeUnitTimeInterval, $.BER)(value.chargeUnitTimeInterval, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TariffDuration, $.BER)(value.tariffDuration, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommunicationChargePulse(value, elGetter);
}


/* eslint-enable */
