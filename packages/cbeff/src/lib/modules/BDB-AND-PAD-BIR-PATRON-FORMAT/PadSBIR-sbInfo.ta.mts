/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";


/**
 * @summary PadSBIR_sbInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PadSBIR-sbInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PadSBIR_sbInfo {
    /**
     * @summary `sbFormat`.
     * @public
     * @readonly
     */
    readonly sbFormat: RegistryID;

    constructor (
        sbFormat: RegistryID
    ) {
        this.sbFormat = sbFormat;
    }

    /**
     * @summary Restructures an object into a PadSBIR_sbInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PadSBIR_sbInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PadSBIR_sbInfo`.
     * @returns {PadSBIR_sbInfo}
     */
    public static _from_object (_o: { [_K in keyof (PadSBIR_sbInfo)]: (PadSBIR_sbInfo)[_K] }): PadSBIR_sbInfo {
        return new PadSBIR_sbInfo(_o.sbFormat);
    }


}

/**
 * @summary The Leading Root Component Types of PadSBIR_sbInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PadSBIR_sbInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sbFormat", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of PadSBIR_sbInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PadSBIR_sbInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PadSBIR_sbInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PadSBIR_sbInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PadSBIR_sbInfo: $.ASN1Decoder<PadSBIR_sbInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PadSBIR_sbInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PadSBIR_sbInfo (el: _Element): PadSBIR_sbInfo {
    if (!_cached_decoder_for_PadSBIR_sbInfo) { _cached_decoder_for_PadSBIR_sbInfo = function (el: _Element): PadSBIR_sbInfo {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sbFormat!: RegistryID;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sbFormat": (_el: _Element): void => { sbFormat = $._decode_implicit<RegistryID>(() => _decode_RegistryID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PadSBIR_sbInfo,
        _extension_additions_list_spec_for_PadSBIR_sbInfo,
        _root_component_type_list_2_spec_for_PadSBIR_sbInfo,
        undefined,
    );
    return new PadSBIR_sbInfo( /* SET_CONSTRUCTOR_CALL */
        sbFormat
    );
}; }
    return _cached_decoder_for_PadSBIR_sbInfo(el);
}

let _cached_encoder_for_PadSBIR_sbInfo: $.ASN1Encoder<PadSBIR_sbInfo> | null = null;

/**
 * @summary Encodes a(n) PadSBIR_sbInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PadSBIR_sbInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PadSBIR_sbInfo (value: PadSBIR_sbInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PadSBIR_sbInfo) { _cached_encoder_for_PadSBIR_sbInfo = function (value: PadSBIR_sbInfo, elGetter: $.ASN1Encoder<PadSBIR_sbInfo>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RegistryID, $.BER)(value.sbFormat, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PadSBIR_sbInfo(value, elGetter);
}


/* eslint-enable */
