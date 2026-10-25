/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    type Body,
    _decode_Body,
    _encode_Body,
    Heading,
    _decode_Heading,
    _encode_Heading,
} from "@wildboar/x400/IPMSInformationObjects";



/**
 * @summary MM
 * @description
 * 
 * A military message: the P772 content. It is an IPMS heading and body, read
 * with "MMS" substituted for "IPMS", plus the military heading extensions.
 *
 * The IPM identifier is mandatory and is the MM-message identification. The
 * user component is the originating MM-UA's O/R name, including the O/R address
 * and every component of the global domain identifier. The local identifier is
 * a UA serial number, a space, and the filing time in UTC including seconds
 * (`ddmmyyhhmmssZ` is 13 characters). The recommended minimum length is 15. Do
 * not interpret the serial number as an integer.
 *
 * Content type `id-nato-mmhs-cont-mm88` (`{id-mcont 1}`), also assigned in this
 * module as `id-mct-p772` for the message store. STANAG 4406 (Ed. 2), Annex A,
 * clauses 7.1.1, 20.2, and B.37, and Annex E of the X.420 extensions.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM ::= SEQUENCE {mmheading  Heading,
 *                  mmbody     Body}
 * ```
 * 
 * @class
 */
export
class MM {
    /**
     * @summary `mmheading`.
     * @description
     *
     * IPMS heading, including the military heading extensions of Annex A1.
     * Unsupported national extensions may be ignored on reception. STANAG 4406
     * (Ed. 2), Annex A, clause 7.2.17 and Annex E.
     * @public
     * @readonly
     */
    readonly mmheading: Heading;
    /**
     * @summary `mmbody`.
     * @description
     *
     * IPMS body, including the military extended body parts (ADatP-3,
     * corrections, forwarded-encrypted, MM-message, and ACP 127 data). STANAG
     * 4406 (Ed. 2), Annex A, clause 7.3 and Annex E.
     * @public
     * @readonly
     */
    readonly mmbody: Body;

    constructor (
        mmheading: Heading,
        mmbody: Body
    ) {
        this.mmheading = mmheading;
        this.mmbody = mmbody;
    }

    /**
     * @summary Restructures an object into a MM
     * @description
     * 
     * This takes an `object` and converts it to a `MM`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM`.
     * @returns {MM}
     */
    public static _from_object (_o: { [_K in keyof (MM)]: (MM)[_K] }): MM {
        return new MM(_o.mmheading, _o.mmbody);
    }


}

/**
 * @summary The Leading Root Component Types of MM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM: $.ComponentSpec[] = [
    new $.ComponentSpec("mmheading", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("mmbody", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of MM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM: $.ASN1Decoder<MM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM (el: _Element): MM {
    if (!_cached_decoder_for_MM) { _cached_decoder_for_MM = function (el: _Element): MM {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MM contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mmheading";
    sequence[1].name = "mmbody";
    const mmheading: Heading = _decode_Heading(sequence[0]);
    const mmbody: Body = _decode_Body(sequence[1]);
    return new MM(
        mmheading,
        mmbody,

    );
}; }
    return _cached_decoder_for_MM(el);
}

let _cached_encoder_for_MM: $.ASN1Encoder<MM> | null = null;

/**
 * @summary Encodes a(n) MM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM, encoded as an ASN.1 Element.
 */
export
function _encode_MM (value: MM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM) { _cached_encoder_for_MM = function (value: MM): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Heading(value.mmheading, $.BER),
        /* REQUIRED   */ _encode_Body(value.mmbody, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MM(value, elGetter);
}


/* eslint-enable */
