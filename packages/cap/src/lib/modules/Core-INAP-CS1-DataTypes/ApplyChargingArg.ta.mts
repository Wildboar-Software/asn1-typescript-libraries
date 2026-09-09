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
import { AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../Core-INAP-CS1-DataTypes/AChBillingChargingCharacteristics.ta.mjs";
// export { AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../Core-INAP-CS1-DataTypes/AChBillingChargingCharacteristics.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary ApplyChargingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingArg ::= SEQUENCE {
 *      aChBillingChargingCharacteristics     [0] AChBillingChargingCharacteristics,
 *      sendCalculationToSCPIndication     [1] BOOLEAN     DEFAULT FALSE,
 *      partyToCharge     [2] LegID     OPTIONAL,
 *      extensions     [3] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class ApplyChargingArg {
    constructor (
        /**
         * @summary `aChBillingChargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly aChBillingChargingCharacteristics: AChBillingChargingCharacteristics,
        /**
         * @summary `sendCalculationToSCPIndication`.
         * @public
         * @readonly
         */
        readonly sendCalculationToSCPIndication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `partyToCharge`.
         * @public
         * @readonly
         */
        readonly partyToCharge: OPTIONAL<LegID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a ApplyChargingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ApplyChargingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplyChargingArg`.
     * @returns {ApplyChargingArg}
     */
    public static _from_object (_o: { [_K in keyof (ApplyChargingArg)]: (ApplyChargingArg)[_K] }): ApplyChargingArg {
        return new ApplyChargingArg(_o.aChBillingChargingCharacteristics, _o.sendCalculationToSCPIndication, _o.partyToCharge, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `sendCalculationToSCPIndication`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_sendCalculationToSCPIndication () { return false; }
}

/**
 * @summary The Leading Root Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("aChBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sendCalculationToSCPIndication", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("partyToCharge", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplyChargingArg: $.ASN1Decoder<ApplyChargingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyChargingArg (el: _Element): ApplyChargingArg {
    if (!_cached_decoder_for_ApplyChargingArg) { _cached_decoder_for_ApplyChargingArg = function (el: _Element): ApplyChargingArg {
    let aChBillingChargingCharacteristics!: AChBillingChargingCharacteristics;
    let sendCalculationToSCPIndication: OPTIONAL<BOOLEAN> = ApplyChargingArg._default_value_for_sendCalculationToSCPIndication;
    let partyToCharge: OPTIONAL<LegID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "aChBillingChargingCharacteristics": (_el: _Element): void => { aChBillingChargingCharacteristics = $._decode_implicit<AChBillingChargingCharacteristics>(() => _decode_AChBillingChargingCharacteristics)(_el); },
        "sendCalculationToSCPIndication": (_el: _Element): void => { sendCalculationToSCPIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplyChargingArg,
        _extension_additions_list_spec_for_ApplyChargingArg,
        _root_component_type_list_2_spec_for_ApplyChargingArg,
        undefined,
    );
    return new ApplyChargingArg(
        aChBillingChargingCharacteristics,
        sendCalculationToSCPIndication,
        partyToCharge,
        extensions
    );
}; }
    return _cached_decoder_for_ApplyChargingArg(el);
}

let _cached_encoder_for_ApplyChargingArg: $.ASN1Encoder<ApplyChargingArg> | null = null;

/**
 * @summary Encodes a(n) ApplyChargingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyChargingArg (value: ApplyChargingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyChargingArg) { _cached_encoder_for_ApplyChargingArg = function (value: ApplyChargingArg, elGetter: $.ASN1Encoder<ApplyChargingArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AChBillingChargingCharacteristics, $.BER)(value.aChBillingChargingCharacteristics, $.BER),
            /* IF_DEFAULT */ (value.sendCalculationToSCPIndication === undefined || $.deepEq(value.sendCalculationToSCPIndication, ApplyChargingArg._default_value_for_sendCalculationToSCPIndication) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.sendCalculationToSCPIndication, $.BER)),
            /* IF_ABSENT  */ ((value.partyToCharge === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.partyToCharge, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ApplyChargingArg(value, elGetter);
}


/* eslint-enable */
