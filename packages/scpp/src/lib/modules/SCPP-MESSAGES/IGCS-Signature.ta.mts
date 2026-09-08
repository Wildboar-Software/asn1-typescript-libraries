/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IGCS_Signature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Signature ::= SEQUENCE {
 *   igcsID         INTEGER(0..65535),
 *   signatureData  OCTET STRING,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class IGCS_Signature {
    constructor (
        /**
         * @summary `igcsID`.
         * @public
         * @readonly
         */
        readonly igcsID: INTEGER,
        /**
         * @summary `signatureData`.
         * @public
         * @readonly
         */
        readonly signatureData: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        const _n = typeof this.igcsID === "bigint" ? Number(this.igcsID) : this.igcsID;
        if (_n < 0 || _n > 65535) {
            throw new ASN1OverflowError("IGCS_Signature.igcsID violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a IGCS_Signature
     * @description
     * 
     * This takes an `object` and converts it to a `IGCS_Signature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IGCS_Signature`.
     * @returns {IGCS_Signature}
     */
    public static _from_object (_o: { [_K in keyof (IGCS_Signature)]: (IGCS_Signature)[_K] }): IGCS_Signature {
        return new IGCS_Signature(_o.igcsID, _o.signatureData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IGCS_Signature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IGCS_Signature: $.ComponentSpec[] = [
    new $.ComponentSpec("igcsID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signatureData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IGCS_Signature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IGCS_Signature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IGCS_Signature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IGCS_Signature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IGCS_Signature: $.ASN1Decoder<IGCS_Signature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Signature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Signature (el: _Element): IGCS_Signature {
    if (!_cached_decoder_for_IGCS_Signature) { _cached_decoder_for_IGCS_Signature = function (el: _Element): IGCS_Signature {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IGCS-Signature contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "igcsID";
    sequence[1].name = "signatureData";
    const igcsID = $._decodeInteger(sequence[0]);
    const signatureData = $._decodeOctetString(sequence[1]);
    return new IGCS_Signature(
        igcsID,
        signatureData,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IGCS_Signature(el);
}

let _cached_encoder_for_IGCS_Signature: $.ASN1Encoder<IGCS_Signature> | null = null;

/**
 * @summary Encodes a(n) IGCS_Signature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Signature, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Signature (value: IGCS_Signature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Signature) { _cached_encoder_for_IGCS_Signature = function (value: IGCS_Signature): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.igcsID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.signatureData, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IGCS_Signature(value, elGetter);
}


/* eslint-enable */
