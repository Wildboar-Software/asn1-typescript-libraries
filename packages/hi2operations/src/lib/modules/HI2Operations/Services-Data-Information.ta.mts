/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPRS_parameters, _decode_GPRS_parameters, _encode_GPRS_parameters } from "../EpsHI2Operations/GPRS-parameters.ta.mjs";
// export { GPRS_parameters, _decode_GPRS_parameters, _encode_GPRS_parameters } from "../EpsHI2Operations/GPRS-parameters.ta.mjs";


/**
 * @summary Services_Data_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Services-Data-Information ::= SEQUENCE
 * {
 *     gPRS-parameters        [1] GPRS-parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Services_Data_Information {
    constructor (
        /**
         * @summary `gPRS_parameters`.
         * @public
         * @readonly
         */
        readonly gPRS_parameters: OPTIONAL<GPRS_parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Services_Data_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Services_Data_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Services_Data_Information`.
     * @returns {Services_Data_Information}
     */
    public static _from_object (_o: { [_K in keyof (Services_Data_Information)]: (Services_Data_Information)[_K] }): Services_Data_Information {
        return new Services_Data_Information(_o.gPRS_parameters, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Services_Data_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Services_Data_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("gPRS-parameters", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Services_Data_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Services_Data_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Services_Data_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Services_Data_Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Services_Data_Information: $.ASN1Decoder<Services_Data_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Services_Data_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Services_Data_Information (el: _Element): Services_Data_Information {
    if (!_cached_decoder_for_Services_Data_Information) { _cached_decoder_for_Services_Data_Information = function (el: _Element): Services_Data_Information {
    let gPRS_parameters: OPTIONAL<GPRS_parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gPRS-parameters": (_el: _Element): void => { gPRS_parameters = $._decode_implicit<GPRS_parameters>(() => _decode_GPRS_parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Services_Data_Information,
        _extension_additions_list_spec_for_Services_Data_Information,
        _root_component_type_list_2_spec_for_Services_Data_Information,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Services_Data_Information(
        gPRS_parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Services_Data_Information(el);
}

let _cached_encoder_for_Services_Data_Information: $.ASN1Encoder<Services_Data_Information> | null = null;

/**
 * @summary Encodes a(n) Services_Data_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Services_Data_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Services_Data_Information (value: Services_Data_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Services_Data_Information) { _cached_encoder_for_Services_Data_Information = function (value: Services_Data_Information, elGetter: $.ASN1Encoder<Services_Data_Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gPRS_parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GPRS_parameters, $.BER)(value.gPRS_parameters, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Services_Data_Information(value, elGetter);
}


/* eslint-enable */
