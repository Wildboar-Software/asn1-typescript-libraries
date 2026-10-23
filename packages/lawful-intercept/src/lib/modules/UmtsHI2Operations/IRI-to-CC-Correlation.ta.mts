/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_to_CC_Correlation
 * @description
 * 
 * Correlates this IRI to content. Table 7.2 uses it for each PDP context or EPS
 * bearer delivered to the LEMF, and for the signalling context when two
 * contexts are used.
 * 
 * Annex B.3 also uses the optional second value to correlate IRI to CC that
 * carries signalling. The octet layout is an implementation matter (clause
 * 7.1.3).
 * 
 * 3GPP TS 33.108, clause 7.1.3 and table 7.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-to-CC-Correlation ::= SEQUENCE { -- correlates IRI to Content
 *             cc         [0] SET OF     OCTET STRING,-- correlates IRI to multiple CCs
 *             iri     [1]         OCTET STRING OPTIONAL
 *                                     -- correlates IRI to CC with signaling
 * }
 * ```
 * 
 * @class
 */
export
class IRI_to_CC_Correlation {
    /**
     * @summary `cc`.
     * @description
     * 
     * One or more correlation numbers that tie this IRI to content streams. The
     * octet layout is an implementation matter.
     * 
     * 3GPP TS 33.108, clause 7.1.3 and annex B.3.
     * @public
     * @readonly
     */
    readonly cc: OCTET_STRING[];
    /**
     * @summary `iri`.
     * @description
     * 
     * Optional correlation of this IRI to content that also carries signalling.
     * The octet layout is an implementation matter.
     * 
     * 3GPP TS 33.108, clause 7.1.3 and annex B.3.
     * @public
     * @readonly
     */
    readonly iri: OPTIONAL<OCTET_STRING>;

    constructor (
        cc: OCTET_STRING[],
        iri?: OPTIONAL<OCTET_STRING>
    ) {
        this.cc = cc;
        this.iri = iri;
    }

    /**
     * @summary Restructures an object into a IRI_to_CC_Correlation
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_to_CC_Correlation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_to_CC_Correlation`.
     * @returns {IRI_to_CC_Correlation}
     */
    public static _from_object (_o: { [_K in keyof (IRI_to_CC_Correlation)]: (IRI_to_CC_Correlation)[_K] }): IRI_to_CC_Correlation {
        return new IRI_to_CC_Correlation(_o.cc, _o.iri);
    }


}

/**
 * @summary The Leading Root Component Types of IRI_to_CC_Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_to_CC_Correlation: $.ComponentSpec[] = [
    new $.ComponentSpec("cc", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iri", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IRI_to_CC_Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_to_CC_Correlation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_to_CC_Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_to_CC_Correlation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRI_to_CC_Correlation: $.ASN1Decoder<IRI_to_CC_Correlation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_to_CC_Correlation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_to_CC_Correlation (el: _Element): IRI_to_CC_Correlation {
    if (!_cached_decoder_for_IRI_to_CC_Correlation) { _cached_decoder_for_IRI_to_CC_Correlation = function (el: _Element): IRI_to_CC_Correlation {
    let cc!: OCTET_STRING[];
    let iri: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "cc": (_el: _Element): void => { cc = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "iri": (_el: _Element): void => { iri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_to_CC_Correlation,
        _extension_additions_list_spec_for_IRI_to_CC_Correlation,
        _root_component_type_list_2_spec_for_IRI_to_CC_Correlation,
        undefined,
    );
    return new IRI_to_CC_Correlation(
        cc,
        iri
    );
}; }
    return _cached_decoder_for_IRI_to_CC_Correlation(el);
}

let _cached_encoder_for_IRI_to_CC_Correlation: $.ASN1Encoder<IRI_to_CC_Correlation> | null = null;

/**
 * @summary Encodes a(n) IRI_to_CC_Correlation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_to_CC_Correlation, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_to_CC_Correlation (value: IRI_to_CC_Correlation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_to_CC_Correlation) { _cached_encoder_for_IRI_to_CC_Correlation = function (value: IRI_to_CC_Correlation, elGetter: $.ASN1Encoder<IRI_to_CC_Correlation>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.cc, $.BER);
    if (value.iri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.iri, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_to_CC_Correlation(value, elGetter);
}


/* eslint-enable */
