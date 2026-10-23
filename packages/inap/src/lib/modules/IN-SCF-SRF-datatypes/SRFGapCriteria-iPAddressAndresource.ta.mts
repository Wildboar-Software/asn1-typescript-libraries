/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
import { GapOnResource, _decode_GapOnResource, _encode_GapOnResource } from "../IN-SCF-SRF-datatypes/GapOnResource.ta.mjs";
// export { GapOnResource, _decode_GapOnResource, _encode_GapOnResource } from "../IN-SCF-SRF-datatypes/GapOnResource.ta.mjs";


/**
 * @summary SRFGapCriteria_iPAddressAndresource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SRFGapCriteria-iPAddressAndresource ::=
 * SEQUENCE {
 *   iPAddressValue [1] Digits,
 *   gapOnResource [2] GapOnResource,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SRFGapCriteria_iPAddressAndresource {
    /**
     * @summary `iPAddressValue`.
     * @public
     * @readonly
     */
    readonly iPAddressValue: Digits;
    /**
     * @summary `gapOnResource`.
     * @public
     * @readonly
     */
    readonly gapOnResource: GapOnResource;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPAddressValue: Digits,
        gapOnResource: GapOnResource,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPAddressValue = iPAddressValue;
        this.gapOnResource = gapOnResource;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SRFGapCriteria_iPAddressAndresource
     * @description
     * 
     * This takes an `object` and converts it to a `SRFGapCriteria_iPAddressAndresource`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SRFGapCriteria_iPAddressAndresource`.
     * @returns {SRFGapCriteria_iPAddressAndresource}
     */
    public static _from_object (_o: { [_K in keyof (SRFGapCriteria_iPAddressAndresource)]: (SRFGapCriteria_iPAddressAndresource)[_K] }): SRFGapCriteria_iPAddressAndresource {
        return new SRFGapCriteria_iPAddressAndresource(_o.iPAddressValue, _o.gapOnResource, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SRFGapCriteria_iPAddressAndresource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SRFGapCriteria_iPAddressAndresource: $.ComponentSpec[] = [
    new $.ComponentSpec("iPAddressValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gapOnResource", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SRFGapCriteria_iPAddressAndresource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SRFGapCriteria_iPAddressAndresource: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SRFGapCriteria_iPAddressAndresource
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SRFGapCriteria_iPAddressAndresource: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SRFGapCriteria_iPAddressAndresource: $.ASN1Decoder<SRFGapCriteria_iPAddressAndresource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SRFGapCriteria_iPAddressAndresource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SRFGapCriteria_iPAddressAndresource (el: _Element): SRFGapCriteria_iPAddressAndresource {
    if (!_cached_decoder_for_SRFGapCriteria_iPAddressAndresource) { _cached_decoder_for_SRFGapCriteria_iPAddressAndresource = function (el: _Element): SRFGapCriteria_iPAddressAndresource {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SRFGapCriteria-iPAddressAndresource contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPAddressValue";
    sequence[1].name = "gapOnResource";
    const iPAddressValue: Digits = $._decode_implicit<Digits>(() => _decode_Digits)(sequence[0]);
    const gapOnResource: GapOnResource = $._decode_explicit<GapOnResource>(() => _decode_GapOnResource)(sequence[1]);
    return new SRFGapCriteria_iPAddressAndresource(
        iPAddressValue,
        gapOnResource,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_SRFGapCriteria_iPAddressAndresource(el);
}

let _cached_encoder_for_SRFGapCriteria_iPAddressAndresource: $.ASN1Encoder<SRFGapCriteria_iPAddressAndresource> | null = null;

/**
 * @summary Encodes a(n) SRFGapCriteria_iPAddressAndresource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SRFGapCriteria_iPAddressAndresource, encoded as an ASN.1 Element.
 */
export
function _encode_SRFGapCriteria_iPAddressAndresource (value: SRFGapCriteria_iPAddressAndresource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SRFGapCriteria_iPAddressAndresource) { _cached_encoder_for_SRFGapCriteria_iPAddressAndresource = function (value: SRFGapCriteria_iPAddressAndresource, elGetter: $.ASN1Encoder<SRFGapCriteria_iPAddressAndresource>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER)(value.iPAddressValue, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GapOnResource, $.BER)(value.gapOnResource, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SRFGapCriteria_iPAddressAndresource(value, elGetter);
}


/* eslint-enable */
