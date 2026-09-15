/* eslint-disable */
import {
    OPTIONAL,
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
import { SCIBillingChargingCharacteristics, _decode_SCIBillingChargingCharacteristics, _encode_SCIBillingChargingCharacteristics } from "../Core-INAP-CS1-DataTypes/SCIBillingChargingCharacteristics.ta.mjs";
// export { SCIBillingChargingCharacteristics, _decode_SCIBillingChargingCharacteristics, _encode_SCIBillingChargingCharacteristics } from "../Core-INAP-CS1-DataTypes/SCIBillingChargingCharacteristics.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary SendChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendChargingInformationArg ::= SEQUENCE {
 *      sCIBillingChargingCharacteristics     [0] SCIBillingChargingCharacteristics,
 *      legID     [1] LegID,
 *      extensions     [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class SendChargingInformationArg {
    constructor (
        /**
         * @summary `sCIBillingChargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly sCIBillingChargingCharacteristics: SCIBillingChargingCharacteristics,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: LegID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a SendChargingInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendChargingInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendChargingInformationArg`.
     * @returns {SendChargingInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (SendChargingInformationArg)]: (SendChargingInformationArg)[_K] }): SendChargingInformationArg {
        return new SendChargingInformationArg(_o.sCIBillingChargingCharacteristics, _o.legID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SendChargingInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendChargingInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sCIBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SendChargingInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendChargingInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendChargingInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendChargingInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendChargingInformationArg: $.ASN1Decoder<SendChargingInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendChargingInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendChargingInformationArg (el: _Element): SendChargingInformationArg {
    if (!_cached_decoder_for_SendChargingInformationArg) { _cached_decoder_for_SendChargingInformationArg = function (el: _Element): SendChargingInformationArg {
    let sCIBillingChargingCharacteristics!: SCIBillingChargingCharacteristics;
    let legID!: LegID;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "sCIBillingChargingCharacteristics": (_el: _Element): void => { sCIBillingChargingCharacteristics = $._decode_implicit<SCIBillingChargingCharacteristics>(() => _decode_SCIBillingChargingCharacteristics)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendChargingInformationArg,
        _extension_additions_list_spec_for_SendChargingInformationArg,
        _root_component_type_list_2_spec_for_SendChargingInformationArg,
        undefined,
    );
    return new SendChargingInformationArg(
        sCIBillingChargingCharacteristics,
        legID,
        extensions
    );
}; }
    return _cached_decoder_for_SendChargingInformationArg(el);
}

let _cached_encoder_for_SendChargingInformationArg: $.ASN1Encoder<SendChargingInformationArg> | null = null;

/**
 * @summary Encodes a(n) SendChargingInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendChargingInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendChargingInformationArg (value: SendChargingInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendChargingInformationArg) { _cached_encoder_for_SendChargingInformationArg = function (value: SendChargingInformationArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SCIBillingChargingCharacteristics, $.BER)(value.sCIBillingChargingCharacteristics, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendChargingInformationArg(value, elGetter);
}


/* eslint-enable */
