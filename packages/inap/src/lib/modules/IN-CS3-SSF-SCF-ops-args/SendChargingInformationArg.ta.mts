/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCIBillingChargingCharacteristics, _decode_SCIBillingChargingCharacteristics, _encode_SCIBillingChargingCharacteristics } from "../IN-CS3-SSF-SCF-datatypes/SCIBillingChargingCharacteristics.ta.mjs";
// export { SCIBillingChargingCharacteristics, _decode_SCIBillingChargingCharacteristics, _encode_SCIBillingChargingCharacteristics } from "../IN-CS3-SSF-SCF-datatypes/SCIBillingChargingCharacteristics.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary SendChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendChargingInformationArg ::= SEQUENCE {
 *   sCIBillingChargingCharacteristics  [0]  SCIBillingChargingCharacteristics,
 *   partyToCharge                      [1]  LegID,
 *   extensions                         [2]  Extensions OPTIONAL,
 *   nocharge                           [3]  BOOLEAN OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SendChargingInformationArg {
    /**
     * @summary `sCIBillingChargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly sCIBillingChargingCharacteristics: SCIBillingChargingCharacteristics;
    /**
     * @summary `partyToCharge`.
     * @public
     * @readonly
     */
    readonly partyToCharge: LegID;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `nocharge`.
     * @public
     * @readonly
     */
    readonly nocharge: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sCIBillingChargingCharacteristics: SCIBillingChargingCharacteristics,
        partyToCharge: LegID,
        extensions?: OPTIONAL<Extensions>,
        nocharge?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sCIBillingChargingCharacteristics = sCIBillingChargingCharacteristics;
        this.partyToCharge = partyToCharge;
        this.extensions = extensions;
        this.nocharge = nocharge;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new SendChargingInformationArg(_o.sCIBillingChargingCharacteristics, _o.partyToCharge, _o.extensions, _o.nocharge, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nocharge", true, $.hasTag(_TagClass.context, 3))
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
    let partyToCharge!: LegID;
    let extensions: OPTIONAL<Extensions>;
    let nocharge: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sCIBillingChargingCharacteristics": (_el: _Element): void => { sCIBillingChargingCharacteristics = $._decode_implicit<SCIBillingChargingCharacteristics>(() => _decode_SCIBillingChargingCharacteristics)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "nocharge": (_el: _Element): void => { nocharge = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
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
        nocharge,
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
    if (!_cached_encoder_for_SendChargingInformationArg) { _cached_encoder_for_SendChargingInformationArg = function (value: SendChargingInformationArg, elGetter: $.ASN1Encoder<SendChargingInformationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SCIBillingChargingCharacteristics, $.BER)(value.sCIBillingChargingCharacteristics, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.partyToCharge, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.nocharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.nocharge, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SendChargingInformationArg(value, elGetter);
}


/* eslint-enable */
