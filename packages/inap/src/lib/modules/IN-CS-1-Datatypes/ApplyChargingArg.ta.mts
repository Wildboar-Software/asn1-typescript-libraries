/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../IN-CS-1-Datatypes/AChBillingChargingCharacteristics.ta.mjs";
// export { AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../IN-CS-1-Datatypes/AChBillingChargingCharacteristics.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


/**
 * @summary ApplyChargingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingArg ::= SEQUENCE {
 *   aChBillingChargingCharacteristics  [0]  AChBillingChargingCharacteristics,
 *   partyToCharge                      [2]  LegID OPTIONAL,
 *   extensions
 *     [3]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ApplyChargingArg {
    /**
     * @summary `aChBillingChargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly aChBillingChargingCharacteristics: AChBillingChargingCharacteristics;
    /**
     * @summary `partyToCharge`.
     * @public
     * @readonly
     */
    readonly partyToCharge: OPTIONAL<LegID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: ExtensionField[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aChBillingChargingCharacteristics: AChBillingChargingCharacteristics,
        partyToCharge: OPTIONAL<LegID>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aChBillingChargingCharacteristics = aChBillingChargingCharacteristics;
        this.partyToCharge = partyToCharge;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new ApplyChargingArg(_o.aChBillingChargingCharacteristics, _o.partyToCharge, _o.extensions, _o._unrecognizedExtensionsList);
    }


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
    new $.ComponentSpec("aChBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partyToCharge", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 3))
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
    let partyToCharge: OPTIONAL<LegID>;
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aChBillingChargingCharacteristics": (_el: _Element): void => { aChBillingChargingCharacteristics = $._decode_implicit<AChBillingChargingCharacteristics>(() => _decode_AChBillingChargingCharacteristics)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplyChargingArg,
        _extension_additions_list_spec_for_ApplyChargingArg,
        _root_component_type_list_2_spec_for_ApplyChargingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ApplyChargingArg(
        aChBillingChargingCharacteristics,
        partyToCharge,
        extensions,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AChBillingChargingCharacteristics, $.BER)(value.aChBillingChargingCharacteristics, $.BER);
    if (value.partyToCharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.partyToCharge, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ApplyChargingArg(value, elGetter);
}


/* eslint-enable */
