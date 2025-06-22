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
import { EvidenceRecord_version, _decode_EvidenceRecord_version, _encode_EvidenceRecord_version } from "../ERS/EvidenceRecord-version.ta.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
import { CryptoInfos, _decode_CryptoInfos, _encode_CryptoInfos } from "../ERS/CryptoInfos.ta.mjs";
import { EncryptionInfo, _decode_EncryptionInfo, _encode_EncryptionInfo } from "../ERS/EncryptionInfo.ta.mjs";
import { ArchiveTimeStampSequence, _decode_ArchiveTimeStampSequence, _encode_ArchiveTimeStampSequence } from "../ERS/ArchiveTimeStampSequence.ta.mjs";

/**
 * @summary EvidenceRecord
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvidenceRecord ::= SEQUENCE {
 *     version                   INTEGER { v1(1) },
 *     digestAlgorithms          SEQUENCE OF AlgorithmIdentifier,
 *     cryptoInfos               [0] CryptoInfos OPTIONAL,
 *     encryptionInfo            [1] EncryptionInfo OPTIONAL,
 *     archiveTimeStampSequence  ArchiveTimeStampSequence }
 * ```
 *
 * @class
 */
export
class EvidenceRecord {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: EvidenceRecord_version,
        /**
         * @summary `digestAlgorithms`.
         * @public
         * @readonly
         */
        readonly digestAlgorithms: AlgorithmIdentifier[],
        /**
         * @summary `cryptoInfos`.
         * @public
         * @readonly
         */
        readonly cryptoInfos: OPTIONAL<CryptoInfos>,
        /**
         * @summary `encryptionInfo`.
         * @public
         * @readonly
         */
        readonly encryptionInfo: OPTIONAL<EncryptionInfo>,
        /**
         * @summary `archiveTimeStampSequence`.
         * @public
         * @readonly
         */
        readonly archiveTimeStampSequence: ArchiveTimeStampSequence
    ) {}

    /**
     * @summary Restructures an object into a EvidenceRecord
     * @description
     *
     * This takes an `object` and converts it to a `EvidenceRecord`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EvidenceRecord`.
     * @returns {EvidenceRecord}
     */
    public static _from_object (_o: { [_K in keyof (EvidenceRecord)]: (EvidenceRecord)[_K] }): EvidenceRecord {
        return new EvidenceRecord(_o.version, _o.digestAlgorithms, _o.cryptoInfos, _o.encryptionInfo, _o.archiveTimeStampSequence);
    }


}


/**
 * @summary The Leading Root Component Types of EvidenceRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EvidenceRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("digestAlgorithms", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("cryptoInfos", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("encryptionInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("archiveTimeStampSequence", false, $.hasTag(_TagClass.universal, 16))
];


/**
 * @summary The Trailing Root Component Types of EvidenceRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EvidenceRecord: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of EvidenceRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_EvidenceRecord: $.ComponentSpec[] = [

];


let _cached_decoder_for_EvidenceRecord: $.ASN1Decoder<EvidenceRecord> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EvidenceRecord
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EvidenceRecord} The decoded data structure.
 */
export
function _decode_EvidenceRecord (el: _Element) {
    if (!_cached_decoder_for_EvidenceRecord) { _cached_decoder_for_EvidenceRecord = function (el: _Element): EvidenceRecord {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: EvidenceRecord_version;
    let digestAlgorithms!: AlgorithmIdentifier[];
    let cryptoInfos: OPTIONAL<CryptoInfos>;
    let encryptionInfo: OPTIONAL<EncryptionInfo>;
    let archiveTimeStampSequence!: ArchiveTimeStampSequence;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_EvidenceRecord_version(_el); },
        "digestAlgorithms": (_el: _Element): void => { digestAlgorithms = $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "cryptoInfos": (_el: _Element): void => { cryptoInfos = $._decode_implicit<CryptoInfos>(() => _decode_CryptoInfos)(_el); },
        "encryptionInfo": (_el: _Element): void => { encryptionInfo = $._decode_implicit<EncryptionInfo>(() => _decode_EncryptionInfo)(_el); },
        "archiveTimeStampSequence": (_el: _Element): void => { archiveTimeStampSequence = _decode_ArchiveTimeStampSequence(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EvidenceRecord,
        _extension_additions_list_spec_for_EvidenceRecord,
        _root_component_type_list_2_spec_for_EvidenceRecord,
        undefined,
    );
    return new EvidenceRecord( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        digestAlgorithms,
        cryptoInfos,
        encryptionInfo,
        archiveTimeStampSequence
    );
}; }
    return _cached_decoder_for_EvidenceRecord(el);
}


let _cached_encoder_for_EvidenceRecord: $.ASN1Encoder<EvidenceRecord> | null = null;


/**
 * @summary Encodes a(n) EvidenceRecord into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvidenceRecord, encoded as an ASN.1 Element.
 */
export
function _encode_EvidenceRecord (value: EvidenceRecord, elGetter: $.ASN1Encoder<EvidenceRecord>) {
    if (!_cached_encoder_for_EvidenceRecord) { _cached_encoder_for_EvidenceRecord = function (value: EvidenceRecord): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EvidenceRecord_version(value.version, $.DER),
            /* REQUIRED   */ $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.DER)(value.digestAlgorithms, $.DER),
            /* IF_ABSENT  */ ((value.cryptoInfos === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CryptoInfos, $.DER)(value.cryptoInfos, $.DER)),
            /* IF_ABSENT  */ ((value.encryptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EncryptionInfo, $.DER)(value.encryptionInfo, $.DER)),
            /* REQUIRED   */ _encode_ArchiveTimeStampSequence(value.archiveTimeStampSequence, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_EvidenceRecord(value, elGetter);
}


/* eslint-enable */
