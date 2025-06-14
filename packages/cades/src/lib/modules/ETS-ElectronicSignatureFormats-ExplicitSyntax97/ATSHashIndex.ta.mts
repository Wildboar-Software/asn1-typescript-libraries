/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    id_sha256,
} from "@wildboar/x500/src/lib/modules/AlgorithmObjectIdentifiers/id-sha256.va.mjs";


/* START_OF_SYMBOL_DEFINITION ATSHashIndex */
/**
 * @summary ATSHashIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATSHashIndex ::= SEQUENCE {
 *     hashIndAlgorithm        AlgorithmIdentifier DEFAULT {algorithm id-sha256},
 *     certificatesHashIndex   SEQUENCE OF OCTET STRING,
 *     crlsHashIndex           SEQUENCE OF OCTET STRING,
 *     unsignedAttrsHashIndex  SEQUENCE OF OCTET STRING }
 * ```
 *
 * @class
 */
export
class ATSHashIndex {
    constructor (
        /**
         * @summary `hashIndAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashIndAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `certificatesHashIndex`.
         * @public
         * @readonly
         */
        readonly certificatesHashIndex: OCTET_STRING[],
        /**
         * @summary `crlsHashIndex`.
         * @public
         * @readonly
         */
        readonly crlsHashIndex: OCTET_STRING[],
        /**
         * @summary `unsignedAttrsHashIndex`.
         * @public
         * @readonly
         */
        readonly unsignedAttrsHashIndex: OCTET_STRING[]
    ) {}

    /**
     * @summary Restructures an object into a ATSHashIndex
     * @description
     *
     * This takes an `object` and converts it to a `ATSHashIndex`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ATSHashIndex`.
     * @returns {ATSHashIndex}
     */
    public static _from_object (_o: { [_K in keyof (ATSHashIndex)]: (ATSHashIndex)[_K] }): ATSHashIndex {
        return new ATSHashIndex(_o.hashIndAlgorithm, _o.certificatesHashIndex, _o.crlsHashIndex, _o.unsignedAttrsHashIndex);
    }

    /**
     * @summary Getter that returns the default value for `hashIndAlgorithm`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hashIndAlgorithm () { return AlgorithmIdentifier._from_object({
        algorithm: id_sha256,
        parameters: undefined,
        _unrecognizedExtensionsList: [],
    }); }
}
/* END_OF_SYMBOL_DEFINITION ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ATSHashIndex */
/**
 * @summary The Leading Root Component Types of ATSHashIndex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ATSHashIndex: $.ComponentSpec[] = [
    new $.ComponentSpec("hashIndAlgorithm", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("certificatesHashIndex", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("crlsHashIndex", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("unsignedAttrsHashIndex", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ATSHashIndex */
/**
 * @summary The Trailing Root Component Types of ATSHashIndex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ATSHashIndex: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ATSHashIndex */
/**
 * @summary The Extension Addition Component Types of ATSHashIndex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ATSHashIndex: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ATSHashIndex */
let _cached_decoder_for_ATSHashIndex: $.ASN1Decoder<ATSHashIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _decode_ATSHashIndex */
/**
 * @summary Decodes an ASN.1 element into a(n) ATSHashIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ATSHashIndex} The decoded data structure.
 */
export
function _decode_ATSHashIndex (el: _Element) {
    if (!_cached_decoder_for_ATSHashIndex) { _cached_decoder_for_ATSHashIndex = function (el: _Element): ATSHashIndex {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let hashIndAlgorithm: OPTIONAL<AlgorithmIdentifier> = ATSHashIndex._default_value_for_hashIndAlgorithm;
    let certificatesHashIndex!: OCTET_STRING[];
    let crlsHashIndex!: OCTET_STRING[];
    let unsignedAttrsHashIndex!: OCTET_STRING[];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "hashIndAlgorithm": (_el: _Element): void => { hashIndAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "certificatesHashIndex": (_el: _Element): void => { certificatesHashIndex = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "crlsHashIndex": (_el: _Element): void => { crlsHashIndex = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "unsignedAttrsHashIndex": (_el: _Element): void => { unsignedAttrsHashIndex = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ATSHashIndex,
        _extension_additions_list_spec_for_ATSHashIndex,
        _root_component_type_list_2_spec_for_ATSHashIndex,
        undefined,
    );
    return new ATSHashIndex( /* SEQUENCE_CONSTRUCTOR_CALL */
        hashIndAlgorithm,
        certificatesHashIndex,
        crlsHashIndex,
        unsignedAttrsHashIndex
    );
}; }
    return _cached_decoder_for_ATSHashIndex(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ATSHashIndex */
let _cached_encoder_for_ATSHashIndex: $.ASN1Encoder<ATSHashIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ATSHashIndex */

/* START_OF_SYMBOL_DEFINITION _encode_ATSHashIndex */
/**
 * @summary Encodes a(n) ATSHashIndex into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATSHashIndex, encoded as an ASN.1 Element.
 */
export
function _encode_ATSHashIndex (value: ATSHashIndex, elGetter: $.ASN1Encoder<ATSHashIndex>) {
    if (!_cached_encoder_for_ATSHashIndex) { _cached_encoder_for_ATSHashIndex = function (value: ATSHashIndex): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.hashIndAlgorithm === undefined || $.deepEq(value.hashIndAlgorithm, ATSHashIndex._default_value_for_hashIndAlgorithm) ? undefined : _encode_AlgorithmIdentifier(value.hashIndAlgorithm, $.BER)),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER)(value.certificatesHashIndex, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER)(value.crlsHashIndex, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER)(value.unsignedAttrsHashIndex, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ATSHashIndex(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ATSHashIndex */

/* eslint-enable */
