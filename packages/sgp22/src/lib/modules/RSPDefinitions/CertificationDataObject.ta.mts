/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificationDataObject
 * @description
 * 
 * Where to find the eUICC's Digital Letter of Approval. `platformLabel` is the
 * GlobalPlatform DLOA Platform_Label. `discoveryBaseURL` is the discovery base
 * URL of the secure-element default DLOA Registrar. SGP.22 v3.1 Annex H and
 * Annex L. v3.1 marks this object mandatory from v3.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificationDataObject ::= SEQUENCE {
 *     platformLabel UTF8String,    -- Platform_Label as defined in GlobalPlatform DLOA specification [57]
 *     discoveryBaseURL UTF8String    -- Discovery Base URL of the SE default DLOA Registrar as defined in GlobalPlatform DLOA specification [57]
 * }
 * ```
 * 
 * @class
 */
export
class CertificationDataObject {
    constructor (
        /**
         * @summary `platformLabel`.
         * @description
         * 
         * GlobalPlatform DLOA Platform_Label for this eUICC. SGP.22 v3.1 Annex
         * H.
         * 
         * @public
         * @readonly
         */
        readonly platformLabel: UTF8String,
        /**
         * @summary `discoveryBaseURL`.
         * @description
         * 
         * Discovery base URL of the default DLOA Registrar. SGP.22 v3.1 Annex
         * H.
         * 
         * @public
         * @readonly
         */
        readonly discoveryBaseURL: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a CertificationDataObject
     * @description
     * 
     * This takes an `object` and converts it to a `CertificationDataObject`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationDataObject`.
     * @returns {CertificationDataObject}
     */
    public static _from_object (_o: { [_K in keyof (CertificationDataObject)]: (CertificationDataObject)[_K] }): CertificationDataObject {
        return new CertificationDataObject(_o.platformLabel, _o.discoveryBaseURL);
    }


}

/**
 * @summary The Leading Root Component Types of CertificationDataObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificationDataObject: $.ComponentSpec[] = [
    new $.ComponentSpec("platformLabel", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("discoveryBaseURL", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificationDataObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificationDataObject: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificationDataObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificationDataObject: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificationDataObject: $.ASN1Decoder<CertificationDataObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificationDataObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificationDataObject (el: _Element): CertificationDataObject {
    if (!_cached_decoder_for_CertificationDataObject) { _cached_decoder_for_CertificationDataObject = function (el: _Element): CertificationDataObject {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CertificationDataObject contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "platformLabel";
    sequence[1].name = "discoveryBaseURL";
    let platformLabel!: UTF8String;
    let discoveryBaseURL!: UTF8String;
    platformLabel = $._decodeUTF8String(sequence[0]);
    discoveryBaseURL = $._decodeUTF8String(sequence[1]);
    return new CertificationDataObject(
        platformLabel,
        discoveryBaseURL,

    );
}; }
    return _cached_decoder_for_CertificationDataObject(el);
}

let _cached_encoder_for_CertificationDataObject: $.ASN1Encoder<CertificationDataObject> | null = null;

/**
 * @summary Encodes a(n) CertificationDataObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationDataObject, encoded as an ASN.1 Element.
 */
export
function _encode_CertificationDataObject (value: CertificationDataObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificationDataObject) { _cached_encoder_for_CertificationDataObject = function (value: CertificationDataObject): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeUTF8String(value.platformLabel, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.discoveryBaseURL, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificationDataObject(value, elGetter);
}


/* eslint-enable */
