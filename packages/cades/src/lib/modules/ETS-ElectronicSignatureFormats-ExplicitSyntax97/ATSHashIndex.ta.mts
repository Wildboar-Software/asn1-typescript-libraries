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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
import {
    id_sha256,
} from "@wildboar/x500/AlgorithmObjectIdentifiers";


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
    public static get _default_value_for_hashIndAlgorithm (): AlgorithmIdentifier {
        return AlgorithmIdentifier._from_object({
            algorithm: id_sha256,
            parameters: undefined,
            _unrecognizedExtensionsList: [],
        });
    }
}

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
    new $.ComponentSpec("hashIndAlgorithm", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("certificatesHashIndex", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("crlsHashIndex", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("unsignedAttrsHashIndex", false, $.hasTag(_TagClass.universal, 16))
];

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

let _cached_decoder_for_ATSHashIndex: $.ASN1Decoder<ATSHashIndex> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ATSHashIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ATSHashIndex} The decoded data structure.
 */
export
function _decode_ATSHashIndex (el: _Element): ATSHashIndex {
    if (!_cached_decoder_for_ATSHashIndex) { _cached_decoder_for_ATSHashIndex = function (el: _Element): ATSHashIndex {
    let hashIndAlgorithm: OPTIONAL<AlgorithmIdentifier> = ATSHashIndex._default_value_for_hashIndAlgorithm;
    let certificatesHashIndex!: OCTET_STRING[];
    let crlsHashIndex!: OCTET_STRING[];
    let unsignedAttrsHashIndex!: OCTET_STRING[];
    const callbacks: $.DecodingMap = {
        "hashIndAlgorithm": (_el: _Element): void => { hashIndAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "certificatesHashIndex": (_el: _Element): void => { certificatesHashIndex = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "crlsHashIndex": (_el: _Element): void => { crlsHashIndex = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "unsignedAttrsHashIndex": (_el: _Element): void => { unsignedAttrsHashIndex = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ATSHashIndex,
        _extension_additions_list_spec_for_ATSHashIndex,
        _root_component_type_list_2_spec_for_ATSHashIndex,
        undefined,
    );
    return new ATSHashIndex( 
        hashIndAlgorithm,
        certificatesHashIndex,
        crlsHashIndex,
        unsignedAttrsHashIndex
    );
}; }
    return _cached_decoder_for_ATSHashIndex(el);
}

let _cached_encoder_for_ATSHashIndex: $.ASN1Encoder<ATSHashIndex> | null = null;

/**
 * @summary Encodes a(n) ATSHashIndex into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATSHashIndex, encoded as an ASN.1 Element.
 */
export
function _encode_ATSHashIndex (value: ATSHashIndex, elGetter: $.ASN1Encoder<ATSHashIndex>): _Element {
    if (!_cached_encoder_for_ATSHashIndex) { _cached_encoder_for_ATSHashIndex = function (value: ATSHashIndex): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.hashIndAlgorithm === undefined || $.deepEq(value.hashIndAlgorithm, ATSHashIndex._default_value_for_hashIndAlgorithm) ? undefined : _encode_AlgorithmIdentifier(value.hashIndAlgorithm, $.DER)),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.DER)(value.certificatesHashIndex, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.DER)(value.crlsHashIndex, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.DER)(value.unsignedAttrsHashIndex, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ATSHashIndex(value, elGetter);
}


/* eslint-enable */
