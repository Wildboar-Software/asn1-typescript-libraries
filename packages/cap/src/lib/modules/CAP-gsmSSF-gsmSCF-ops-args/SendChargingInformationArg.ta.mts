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
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type SCIBillingChargingCharacteristics, _decode_SCIBillingChargingCharacteristics, _encode_SCIBillingChargingCharacteristics } from "../CAP-datatypes/SCIBillingChargingCharacteristics.ta.mjs";
import { type SendingSideID, _decode_SendingSideID, _encode_SendingSideID } from "../CAP-datatypes/SendingSideID.ta.mjs";



/**
 * @summary SendChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendChargingInformationArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     sCIBillingChargingCharacteristics    [0] SCIBillingChargingCharacteristics {bound},
 *     partyToCharge            [1] SendingSideID,
 *     extensions                [2] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
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
         * @summary `partyToCharge`.
         * @public
         * @readonly
         */
        readonly partyToCharge: SendingSideID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
        return new SendChargingInformationArg(_o.sCIBillingChargingCharacteristics, _o.partyToCharge, _o.extensions, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("partyToCharge", false, $.hasTag(_TagClass.context, 1)),
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
    let partyToCharge!: SendingSideID;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sCIBillingChargingCharacteristics": (_el: _Element): void => { sCIBillingChargingCharacteristics = $._decode_implicit<SCIBillingChargingCharacteristics>(() => _decode_SCIBillingChargingCharacteristics)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_implicit<SendingSideID>(() => _decode_SendingSideID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendChargingInformationArg,
        _extension_additions_list_spec_for_SendChargingInformationArg,
        _root_component_type_list_2_spec_for_SendChargingInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendChargingInformationArg(
        sCIBillingChargingCharacteristics,
        partyToCharge,
        extensions,
        _unrecognizedExtensionsList
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
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SendingSideID, $.BER)(value.partyToCharge, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendChargingInformationArg(value, elGetter);
}


/* eslint-enable */
