/* eslint-disable */
import {
    OPTIONAL,
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
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
import { Attributes, _decode_Attributes, _encode_Attributes } from "../ERS/Attributes.ta.mjs";
import { PartialHashtree, _decode_PartialHashtree, _encode_PartialHashtree } from "../ERS/PartialHashtree.ta.mjs";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta.mjs";



/**
 * @summary ArchiveTimeStamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveTimeStamp ::= SEQUENCE {
 *     digestAlgorithm     [0] AlgorithmIdentifier OPTIONAL,
 *     attributes          [1] Attributes OPTIONAL,
 *     reducedHashtree     [2] SEQUENCE OF PartialHashtree OPTIONAL,
 *     timeStamp           ContentInfo }
 * ```
 *
 * @class
 */
export
class ArchiveTimeStamp {
    constructor (
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<Attributes>,
        /**
         * @summary `reducedHashtree`.
         * @public
         * @readonly
         */
        readonly reducedHashtree: OPTIONAL<PartialHashtree[]>,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: ContentInfo
    ) {}

    /**
     * @summary Restructures an object into a ArchiveTimeStamp
     * @description
     *
     * This takes an `object` and converts it to a `ArchiveTimeStamp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ArchiveTimeStamp`.
     * @returns {ArchiveTimeStamp}
     */
    public static _from_object (_o: { [_K in keyof (ArchiveTimeStamp)]: (ArchiveTimeStamp)[_K] }): ArchiveTimeStamp {
        return new ArchiveTimeStamp(_o.digestAlgorithm, _o.attributes, _o.reducedHashtree, _o.timeStamp);
    }


}


/**
 * @summary The Leading Root Component Types of ArchiveTimeStamp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ArchiveTimeStamp: $.ComponentSpec[] = [
    new $.ComponentSpec("digestAlgorithm", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reducedHashtree", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.universal, 16))
];


/**
 * @summary The Trailing Root Component Types of ArchiveTimeStamp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ArchiveTimeStamp: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of ArchiveTimeStamp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ArchiveTimeStamp: $.ComponentSpec[] = [

];


let _cached_decoder_for_ArchiveTimeStamp: $.ASN1Decoder<ArchiveTimeStamp> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArchiveTimeStamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArchiveTimeStamp} The decoded data structure.
 */
export
function _decode_ArchiveTimeStamp (el: _Element) {
    if (!_cached_decoder_for_ArchiveTimeStamp) { _cached_decoder_for_ArchiveTimeStamp = function (el: _Element): ArchiveTimeStamp {
    let digestAlgorithm: OPTIONAL<AlgorithmIdentifier>;
    let attributes: OPTIONAL<Attributes>;
    let reducedHashtree: OPTIONAL<PartialHashtree[]>;
    let timeStamp!: ContentInfo;
    const callbacks: $.DecodingMap = {
        "digestAlgorithm": (_el: _Element): void => { digestAlgorithm = $._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<Attributes>(() => _decode_Attributes)(_el); },
        "reducedHashtree": (_el: _Element): void => { reducedHashtree = $._decode_implicit<PartialHashtree[]>(() => $._decodeSequenceOf<PartialHashtree>(() => _decode_PartialHashtree))(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = _decode_ContentInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ArchiveTimeStamp,
        _extension_additions_list_spec_for_ArchiveTimeStamp,
        _root_component_type_list_2_spec_for_ArchiveTimeStamp,
        undefined,
    );
    return new ArchiveTimeStamp( 
        digestAlgorithm,
        attributes,
        reducedHashtree,
        timeStamp
    );
}; }
    return _cached_decoder_for_ArchiveTimeStamp(el);
}


let _cached_encoder_for_ArchiveTimeStamp: $.ASN1Encoder<ArchiveTimeStamp> | null = null;


/**
 * @summary Encodes a(n) ArchiveTimeStamp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArchiveTimeStamp, encoded as an ASN.1 Element.
 */
export
function _encode_ArchiveTimeStamp (value: ArchiveTimeStamp, elGetter: $.ASN1Encoder<ArchiveTimeStamp>) {
    if (!_cached_encoder_for_ArchiveTimeStamp) { _cached_encoder_for_ArchiveTimeStamp = function (value: ArchiveTimeStamp): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.digestAlgorithm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AlgorithmIdentifier, $.DER)(value.digestAlgorithm, $.DER)),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Attributes, $.DER)(value.attributes, $.DER)),
            /* IF_ABSENT  */ ((value.reducedHashtree === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<PartialHashtree>(() => _encode_PartialHashtree, $.DER), $.DER)(value.reducedHashtree, $.DER)),
            /* REQUIRED   */ _encode_ContentInfo(value.timeStamp, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ArchiveTimeStamp(value, elGetter);
}


/* eslint-enable */
