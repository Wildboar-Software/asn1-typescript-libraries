/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_to_IRI_Correlation, _decode_IRI_to_IRI_Correlation, _encode_IRI_to_IRI_Correlation } from "../EpsHI2Operations/IRI-to-IRI-Correlation.ta.mjs";
// export { IRI_to_IRI_Correlation, _decode_IRI_to_IRI_Correlation, _encode_IRI_to_IRI_Correlation } from "../EpsHI2Operations/IRI-to-IRI-Correlation.ta.mjs";
import { IRI_to_CC_Correlation, _decode_IRI_to_CC_Correlation, _encode_IRI_to_CC_Correlation } from "../EpsHI2Operations/IRI-to-CC-Correlation.ta.mjs";
// export { IRI_to_CC_Correlation, _decode_IRI_to_CC_Correlation, _encode_IRI_to_CC_Correlation } from "../EpsHI2Operations/IRI-to-CC-Correlation.ta.mjs";


/**
 * @summary IMS_VoIP_Correlation_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-VoIP-Correlation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class IMS_VoIP_Correlation_Item {
    constructor (
        /**
         * @summary `ims_iri`.
         * @public
         * @readonly
         */
        readonly ims_iri: IRI_to_IRI_Correlation,
        /**
         * @summary `ims_cc`.
         * @public
         * @readonly
         */
        readonly ims_cc: OPTIONAL<IRI_to_CC_Correlation>
    ) {}

    /**
     * @summary Restructures an object into a IMS_VoIP_Correlation_Item
     * @description
     * 
     * This takes an `object` and converts it to a `IMS_VoIP_Correlation_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMS_VoIP_Correlation_Item`.
     * @returns {IMS_VoIP_Correlation_Item}
     */
    public static _from_object (_o: { [_K in keyof (IMS_VoIP_Correlation_Item)]: (IMS_VoIP_Correlation_Item)[_K] }): IMS_VoIP_Correlation_Item {
        return new IMS_VoIP_Correlation_Item(_o.ims_iri, _o.ims_cc);
    }


}

/**
 * @summary The Leading Root Component Types of IMS_VoIP_Correlation_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMS_VoIP_Correlation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("ims-iri", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ims-cc", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IMS_VoIP_Correlation_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMS_VoIP_Correlation_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMS_VoIP_Correlation_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMS_VoIP_Correlation_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMS_VoIP_Correlation_Item: $.ASN1Decoder<IMS_VoIP_Correlation_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMS_VoIP_Correlation_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMS_VoIP_Correlation_Item (el: _Element): IMS_VoIP_Correlation_Item {
    if (!_cached_decoder_for_IMS_VoIP_Correlation_Item) { _cached_decoder_for_IMS_VoIP_Correlation_Item = function (el: _Element): IMS_VoIP_Correlation_Item {
    let ims_iri!: IRI_to_IRI_Correlation;
    let ims_cc: OPTIONAL<IRI_to_CC_Correlation>;
    const callbacks: $.DecodingMap = {
        "ims-iri": (_el: _Element): void => { ims_iri = $._decode_implicit<IRI_to_IRI_Correlation>(() => _decode_IRI_to_IRI_Correlation)(_el); },
        "ims-cc": (_el: _Element): void => { ims_cc = $._decode_implicit<IRI_to_CC_Correlation>(() => _decode_IRI_to_CC_Correlation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMS_VoIP_Correlation_Item,
        _extension_additions_list_spec_for_IMS_VoIP_Correlation_Item,
        _root_component_type_list_2_spec_for_IMS_VoIP_Correlation_Item,
        undefined,
    );
    return new IMS_VoIP_Correlation_Item(
        ims_iri,
        ims_cc
    );
}; }
    return _cached_decoder_for_IMS_VoIP_Correlation_Item(el);
}

let _cached_encoder_for_IMS_VoIP_Correlation_Item: $.ASN1Encoder<IMS_VoIP_Correlation_Item> | null = null;

/**
 * @summary Encodes a(n) IMS_VoIP_Correlation_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMS_VoIP_Correlation_Item, encoded as an ASN.1 Element.
 */
export
function _encode_IMS_VoIP_Correlation_Item (value: IMS_VoIP_Correlation_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMS_VoIP_Correlation_Item) { _cached_encoder_for_IMS_VoIP_Correlation_Item = function (value: IMS_VoIP_Correlation_Item, elGetter: $.ASN1Encoder<IMS_VoIP_Correlation_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IRI_to_IRI_Correlation, $.BER)(value.ims_iri, $.BER),
            /* IF_ABSENT  */ ((value.ims_cc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_to_CC_Correlation, $.BER)(value.ims_cc, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMS_VoIP_Correlation_Item(value, elGetter);
}


/* eslint-enable */
