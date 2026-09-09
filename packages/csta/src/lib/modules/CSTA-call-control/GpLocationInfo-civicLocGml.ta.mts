/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    GpLocationInfo_civicLocGml_civicLoc,
    _decode_GpLocationInfo_civicLocGml_civicLoc,
    _encode_GpLocationInfo_civicLocGml_civicLoc
} from "../CSTA-call-control/GpLocationInfo-civicLocGml-civicLoc.ta.mjs";



/**
 * @summary GpLocationInfo_civicLocGml
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GpLocationInfo-civicLocGml ::= SEQUENCE {
 *     gmlFormat [UNIVERSAL 4] OCTET_STRING,
 *     civicLoc [UNIVERSAL 16] GpLocationInfo_civicLocGml_civicLoc OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GpLocationInfo_civicLocGml {
    constructor (
        /**
         * @summary `gmlFormat`.
         * @public
         * @readonly
         */
        readonly gmlFormat: OCTET_STRING,
        /**
         * @summary `civicLoc`.
         * @public
         * @readonly
         */
        readonly civicLoc: OPTIONAL<GpLocationInfo_civicLocGml_civicLoc>
    ) {}

    /**
     * @summary Restructures an object into a GpLocationInfo_civicLocGml
     * @description
     * 
     * This takes an `object` and converts it to a `GpLocationInfo_civicLocGml`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GpLocationInfo_civicLocGml`.
     * @returns {GpLocationInfo_civicLocGml}
     */
    public static _from_object (_o: { [_K in keyof (GpLocationInfo_civicLocGml)]: (GpLocationInfo_civicLocGml)[_K] }): GpLocationInfo_civicLocGml {
        return new GpLocationInfo_civicLocGml(_o.gmlFormat, _o.civicLoc);
    }


}

/**
 * @summary The Leading Root Component Types of GpLocationInfo_civicLocGml
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GpLocationInfo_civicLocGml: $.ComponentSpec[] = [
    new $.ComponentSpec("gmlFormat", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("civicLoc", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of GpLocationInfo_civicLocGml
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GpLocationInfo_civicLocGml: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GpLocationInfo_civicLocGml
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GpLocationInfo_civicLocGml: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GpLocationInfo_civicLocGml: $.ASN1Decoder<GpLocationInfo_civicLocGml> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GpLocationInfo_civicLocGml
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GpLocationInfo_civicLocGml (el: _Element): GpLocationInfo_civicLocGml {
    if (!_cached_decoder_for_GpLocationInfo_civicLocGml) { _cached_decoder_for_GpLocationInfo_civicLocGml = function (el: _Element): GpLocationInfo_civicLocGml {
    let gmlFormat!: OCTET_STRING;
    let civicLoc: OPTIONAL<GpLocationInfo_civicLocGml_civicLoc>;
    const callbacks: $.DecodingMap = {
        "gmlFormat": (_el: _Element): void => { gmlFormat = $._decodeOctetString(_el); },
        "civicLoc": (_el: _Element): void => { civicLoc = _decode_GpLocationInfo_civicLocGml_civicLoc(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GpLocationInfo_civicLocGml,
        _extension_additions_list_spec_for_GpLocationInfo_civicLocGml,
        _root_component_type_list_2_spec_for_GpLocationInfo_civicLocGml,
        undefined,
    );
    return new GpLocationInfo_civicLocGml(
        gmlFormat,
        civicLoc
    );
}; }
    return _cached_decoder_for_GpLocationInfo_civicLocGml(el);
}

let _cached_encoder_for_GpLocationInfo_civicLocGml: $.ASN1Encoder<GpLocationInfo_civicLocGml> | null = null;

/**
 * @summary Encodes a(n) GpLocationInfo_civicLocGml into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GpLocationInfo_civicLocGml, encoded as an ASN.1 Element.
 */
export
function _encode_GpLocationInfo_civicLocGml (value: GpLocationInfo_civicLocGml, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GpLocationInfo_civicLocGml) { _cached_encoder_for_GpLocationInfo_civicLocGml = function (value: GpLocationInfo_civicLocGml, elGetter: $.ASN1Encoder<GpLocationInfo_civicLocGml>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.gmlFormat, $.BER),
            /* IF_ABSENT  */ ((value.civicLoc === undefined) ? undefined : _encode_GpLocationInfo_civicLocGml_civicLoc(value.civicLoc, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GpLocationInfo_civicLocGml(value, elGetter);
}


/* eslint-enable */
