/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagFormat_dbUnavail_why, _decode_DiagFormat_dbUnavail_why, _encode_DiagFormat_dbUnavail_why } from "../DiagnosticFormatDiag1/DiagFormat-dbUnavail-why.ta.mjs";
// export { DiagFormat_dbUnavail_why, _decode_DiagFormat_dbUnavail_why, _encode_DiagFormat_dbUnavail_why } from "../DiagnosticFormatDiag1/DiagFormat-dbUnavail-why.ta.mjs";


/**
 * @summary DiagFormat_dbUnavail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-dbUnavail ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_dbUnavail {
    constructor (
        /**
         * @summary `db`.
         * @public
         * @readonly
         */
        readonly db: DatabaseName,
        /**
         * @summary `why`.
         * @public
         * @readonly
         */
        readonly why: DiagFormat_dbUnavail_why
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_dbUnavail
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_dbUnavail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_dbUnavail`.
     * @returns {DiagFormat_dbUnavail}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_dbUnavail)]: (DiagFormat_dbUnavail)[_K] }): DiagFormat_dbUnavail {
        return new DiagFormat_dbUnavail(_o.db, _o.why);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_dbUnavail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_dbUnavail: $.ComponentSpec[] = [
    /* FIXME: db COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("why", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_dbUnavail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_dbUnavail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_dbUnavail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_dbUnavail: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_dbUnavail: $.ASN1Decoder<DiagFormat_dbUnavail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_dbUnavail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_dbUnavail (el: _Element): DiagFormat_dbUnavail {
    if (!_cached_decoder_for_DiagFormat_dbUnavail) { _cached_decoder_for_DiagFormat_dbUnavail = function (el: _Element): DiagFormat_dbUnavail {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DiagFormat-dbUnavail contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "db";
    sequence[1].name = "why";
    let db!: DatabaseName;
    let why!: DiagFormat_dbUnavail_why;
    db = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(sequence[0]);
    why = $._decode_implicit<DiagFormat_dbUnavail_why>(() => _decode_DiagFormat_dbUnavail_why)(sequence[1]);
    return new DiagFormat_dbUnavail(
        db,
        why,

    );
}; }
    return _cached_decoder_for_DiagFormat_dbUnavail(el);
}

let _cached_encoder_for_DiagFormat_dbUnavail: $.ASN1Encoder<DiagFormat_dbUnavail> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_dbUnavail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_dbUnavail, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_dbUnavail (value: DiagFormat_dbUnavail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_dbUnavail) { _cached_encoder_for_DiagFormat_dbUnavail = function (value: DiagFormat_dbUnavail, elGetter: $.ASN1Encoder<DiagFormat_dbUnavail>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.db, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_DiagFormat_dbUnavail_why, $.BER)(value.why, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_dbUnavail(value, elGetter);
}


/* eslint-enable */
