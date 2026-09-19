/* eslint-disable */
import {
    OCTET_STRING,
    OBJECT_IDENTIFIER,
    VisibleString,
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



/**
 * @summary AccreditingBody
 * @description
 *
 * One body accrediting the laboratory (Clause 6.4.3, Annex B.5
 * Table B.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccreditingBody ::= SEQUENCE {
 *     nameAccreditingBody     VisibleString,
 *     identifierCertificate   OBJECT IDENTIFIER,
 *     signatory               OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class AccreditingBody {
    constructor (
        /**
         * @summary `nameAccreditingBody`.
         * @description
         *
         * Name of the accrediting body (Clause 6.4.3, Annex B.5).
         *
         * @public
         * @readonly
         */
        readonly nameAccreditingBody: VisibleString,
        /**
         * @summary `identifierCertificate`.
         * @description
         *
         * Identifier of the accreditation result (Annex B.5 Table B.3).
         * Clause 6.4.3 does not further specify this OID.
         *
         * @public
         * @readonly
         */
        readonly identifierCertificate: OBJECT_IDENTIFIER,
        /**
         * @summary `signatory`.
         * @description
         *
         * Annex B.5 Table B.3: location, contact point, pointer, URI, or
         * other reference to the laboratory's accreditation
         * certificate. Clause 6.4.3 does not describe the octets.
         *
         * @public
         * @readonly
         */
        readonly signatory: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a AccreditingBody
     * @description
     * 
     * This takes an `object` and converts it to a `AccreditingBody`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccreditingBody`.
     * @returns {AccreditingBody}
     */
    public static _from_object (_o: { [_K in keyof (AccreditingBody)]: (AccreditingBody)[_K] }): AccreditingBody {
        return new AccreditingBody(_o.nameAccreditingBody, _o.identifierCertificate, _o.signatory);
    }


}

/**
 * @summary The Leading Root Component Types of AccreditingBody
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccreditingBody: $.ComponentSpec[] = [
    new $.ComponentSpec("nameAccreditingBody", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("identifierCertificate", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("signatory", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AccreditingBody
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccreditingBody: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccreditingBody
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccreditingBody: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccreditingBody: $.ASN1Decoder<AccreditingBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccreditingBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccreditingBody (el: _Element): AccreditingBody {
    if (!_cached_decoder_for_AccreditingBody) { _cached_decoder_for_AccreditingBody = function (el: _Element): AccreditingBody {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AccreditingBody contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nameAccreditingBody";
    sequence[1].name = "identifierCertificate";
    sequence[2].name = "signatory";
    let nameAccreditingBody!: VisibleString;
    let identifierCertificate!: OBJECT_IDENTIFIER;
    let signatory!: OCTET_STRING;
    nameAccreditingBody = $._decodeVisibleString(sequence[0]);
    identifierCertificate = $._decodeObjectIdentifier(sequence[1]);
    signatory = $._decodeOctetString(sequence[2]);
    return new AccreditingBody(
        nameAccreditingBody,
        identifierCertificate,
        signatory,

    );
}; }
    return _cached_decoder_for_AccreditingBody(el);
}

let _cached_encoder_for_AccreditingBody: $.ASN1Encoder<AccreditingBody> | null = null;

/**
 * @summary Encodes a(n) AccreditingBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccreditingBody, encoded as an ASN.1 Element.
 */
export
function _encode_AccreditingBody (value: AccreditingBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccreditingBody) { _cached_encoder_for_AccreditingBody = function (value: AccreditingBody): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.nameAccreditingBody, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.identifierCertificate, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.signatory, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccreditingBody(value, elGetter);
}


/* eslint-enable */
