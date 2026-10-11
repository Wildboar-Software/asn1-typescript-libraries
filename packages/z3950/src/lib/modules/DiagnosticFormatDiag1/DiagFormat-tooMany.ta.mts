/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DiagFormat_tooMany_tooManyWhat, _encode_DiagFormat_tooMany_tooManyWhat, DiagFormat_tooMany_tooManyWhat } from "../DiagnosticFormatDiag1/DiagFormat-tooMany-tooManyWhat.ta.mjs";


/**
 * @summary DiagFormat_tooMany
 * @description
 * 
 * A limit was exceeded (diag-1). The DIAG.1 conditions are 5, 6, 7, 8, 11, 12,
 * 111, 112, and 234, depending on which limit.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-tooMany ::= SEQUENCE {
 *     tooManyWhat [1] IMPLICIT INTEGER {
 *         argumentWords (1),
 *         truncatedWords (2),
 *         booleanOperators (3),
 *         incompleteSubfields (4),
 *         characters (5),
 *         recordsRetrieved (6),
 *         dataBasesSpecified (7),
 *         resultSetsCreated (8),
 *         indexTermsProcessed (9)
 *     },
 *     max [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DiagFormat_tooMany {
    /**
     * @summary `tooManyWhat`.
     * @description
     * 
     * Which limit was exceeded. The named values are the DIAG.1 conditions
     * listed on that enumeration.
     * 
     * @public
     * @readonly
     */
    readonly tooManyWhat: DiagFormat_tooMany_tooManyWhat;
    /**
     * @summary `max`.
     * @description
     * 
     * The limit, when the server sends one. DIAG.1 puts this in addinfo
     * (maximum, or the number of terms).
     * 
     * @public
     * @readonly
     */
    readonly max: OPTIONAL<INTEGER>;

    constructor (
        tooManyWhat: DiagFormat_tooMany_tooManyWhat,
        max: OPTIONAL<INTEGER>
    ) {
        this.tooManyWhat = tooManyWhat;
        this.max = max;
    }

    /**
     * @summary Restructures an object into a DiagFormat_tooMany
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_tooMany`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_tooMany`.
     * @returns {DiagFormat_tooMany}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_tooMany)]: (DiagFormat_tooMany)[_K] }): DiagFormat_tooMany {
        return new DiagFormat_tooMany(_o.tooManyWhat, _o.max);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_tooMany
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_tooMany: $.ComponentSpec[] = [
    new $.ComponentSpec("tooManyWhat", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("max", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_tooMany
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_tooMany: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_tooMany
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_tooMany: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_tooMany: $.ASN1Decoder<DiagFormat_tooMany> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_tooMany
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_tooMany (el: _Element): DiagFormat_tooMany {
    if (!_cached_decoder_for_DiagFormat_tooMany) { _cached_decoder_for_DiagFormat_tooMany = function (el: _Element): DiagFormat_tooMany {
    let tooManyWhat!: DiagFormat_tooMany_tooManyWhat;
    let max: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "tooManyWhat": (_el: _Element): void => { tooManyWhat = $._decode_implicit<DiagFormat_tooMany_tooManyWhat>(() => _decode_DiagFormat_tooMany_tooManyWhat)(_el); },
        "max": (_el: _Element): void => { max = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_tooMany,
        _extension_additions_list_spec_for_DiagFormat_tooMany,
        _root_component_type_list_2_spec_for_DiagFormat_tooMany,
        undefined,
    );
    return new DiagFormat_tooMany(
        tooManyWhat,
        max
    );
}; }
    return _cached_decoder_for_DiagFormat_tooMany(el);
}

let _cached_encoder_for_DiagFormat_tooMany: $.ASN1Encoder<DiagFormat_tooMany> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_tooMany into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_tooMany, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_tooMany (value: DiagFormat_tooMany, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_tooMany) { _cached_encoder_for_DiagFormat_tooMany = function (value: DiagFormat_tooMany, elGetter: $.ASN1Encoder<DiagFormat_tooMany>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DiagFormat_tooMany_tooManyWhat, $.BER)(value.tooManyWhat, $.BER);
    if (value.max !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.max, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DiagFormat_tooMany(value, elGetter);
}


/* eslint-enable */
