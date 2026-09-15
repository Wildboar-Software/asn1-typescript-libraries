/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { cia_ub_recordLength } from "../CryptographicInformationFramework/cia-ub-recordLength.va.mjs";



/**
 * @summary RecordInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordInfo ::= SEQUENCE {
 *     oDRecordLength      [0] INTEGER (0..cia-ub-recordLength) OPTIONAL,
 *     prKDRecordLength    [1] INTEGER (0..cia-ub-recordLength) OPTIONAL,
 *     puKDRecordLength    [2] INTEGER (0..cia-ub-recordLength) OPTIONAL,
 *     sKDRecordLength     [3] INTEGER (0..cia-ub-recordLength) OPTIONAL,
 *     cDRecordLength      [4] INTEGER (0..cia-ub-recordLength) OPTIONAL,
 *     dCODRecordLength    [5] INTEGER (0..cia-ub-recordLength) OPTIONAL,
 *     aODRecordLength     [6] INTEGER (0..cia-ub-recordLength) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RecordInfo {
    constructor (
        /**
         * @summary `oDRecordLength`.
         * @public
         * @readonly
         */
        readonly oDRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `prKDRecordLength`.
         * @public
         * @readonly
         */
        readonly prKDRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `puKDRecordLength`.
         * @public
         * @readonly
         */
        readonly puKDRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `sKDRecordLength`.
         * @public
         * @readonly
         */
        readonly sKDRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `cDRecordLength`.
         * @public
         * @readonly
         */
        readonly cDRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `dCODRecordLength`.
         * @public
         * @readonly
         */
        readonly dCODRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `aODRecordLength`.
         * @public
         * @readonly
         */
        readonly aODRecordLength: OPTIONAL<INTEGER>
    ) {
        for (const [name, value] of [
            ["oDRecordLength", oDRecordLength],
            ["prKDRecordLength", prKDRecordLength],
            ["puKDRecordLength", puKDRecordLength],
            ["sKDRecordLength", sKDRecordLength],
            ["cDRecordLength", cDRecordLength],
            ["dCODRecordLength", dCODRecordLength],
            ["aODRecordLength", aODRecordLength],
        ] as const) {
            if (value === undefined) {
                continue;
            }
            const n = typeof value === "bigint" ? value : BigInt(value);
            if (n < 0n || n > BigInt(cia_ub_recordLength)) {
                throw new ASN1OverflowError(`RecordInfo.${name} violates INTEGER range`);
            }
        }
    }

    /**
     * @summary Restructures an object into a RecordInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RecordInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordInfo`.
     * @returns {RecordInfo}
     */
    public static _from_object (_o: { [_K in keyof (RecordInfo)]: (RecordInfo)[_K] }): RecordInfo {
        return new RecordInfo(_o.oDRecordLength, _o.prKDRecordLength, _o.puKDRecordLength, _o.sKDRecordLength, _o.cDRecordLength, _o.dCODRecordLength, _o.aODRecordLength);
    }


}

/**
 * @summary The Leading Root Component Types of RecordInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecordInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("oDRecordLength", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("prKDRecordLength", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("puKDRecordLength", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sKDRecordLength", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cDRecordLength", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dCODRecordLength", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aODRecordLength", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of RecordInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecordInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecordInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecordInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecordInfo: $.ASN1Decoder<RecordInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordInfo (el: _Element): RecordInfo {
    if (!_cached_decoder_for_RecordInfo) { _cached_decoder_for_RecordInfo = function (el: _Element): RecordInfo {
    let oDRecordLength: OPTIONAL<INTEGER>;
    let prKDRecordLength: OPTIONAL<INTEGER>;
    let puKDRecordLength: OPTIONAL<INTEGER>;
    let sKDRecordLength: OPTIONAL<INTEGER>;
    let cDRecordLength: OPTIONAL<INTEGER>;
    let dCODRecordLength: OPTIONAL<INTEGER>;
    let aODRecordLength: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "oDRecordLength": (_el: _Element): void => { oDRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "prKDRecordLength": (_el: _Element): void => { prKDRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "puKDRecordLength": (_el: _Element): void => { puKDRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sKDRecordLength": (_el: _Element): void => { sKDRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cDRecordLength": (_el: _Element): void => { cDRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dCODRecordLength": (_el: _Element): void => { dCODRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aODRecordLength": (_el: _Element): void => { aODRecordLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecordInfo,
        _extension_additions_list_spec_for_RecordInfo,
        _root_component_type_list_2_spec_for_RecordInfo,
        undefined,
    );
    return new RecordInfo(
        oDRecordLength,
        prKDRecordLength,
        puKDRecordLength,
        sKDRecordLength,
        cDRecordLength,
        dCODRecordLength,
        aODRecordLength
    );
}; }
    return _cached_decoder_for_RecordInfo(el);
}

let _cached_encoder_for_RecordInfo: $.ASN1Encoder<RecordInfo> | null = null;

/**
 * @summary Encodes a(n) RecordInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RecordInfo (value: RecordInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordInfo) { _cached_encoder_for_RecordInfo = function (value: RecordInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.oDRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.oDRecordLength, $.BER)),
            /* IF_ABSENT  */ ((value.prKDRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.prKDRecordLength, $.BER)),
            /* IF_ABSENT  */ ((value.puKDRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.puKDRecordLength, $.BER)),
            /* IF_ABSENT  */ ((value.sKDRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.sKDRecordLength, $.BER)),
            /* IF_ABSENT  */ ((value.cDRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.cDRecordLength, $.BER)),
            /* IF_ABSENT  */ ((value.dCODRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.dCODRecordLength, $.BER)),
            /* IF_ABSENT  */ ((value.aODRecordLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.aODRecordLength, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RecordInfo(value, elGetter);
}


/* eslint-enable */
