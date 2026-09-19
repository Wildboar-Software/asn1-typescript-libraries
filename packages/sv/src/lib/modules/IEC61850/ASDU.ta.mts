/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UtcTime, _decode_UtcTime, _encode_UtcTime } from "../IEC61850/UtcTime.ta.mjs";
// export { UtcTime, _decode_UtcTime, _encode_UtcTime } from "../IEC61850/UtcTime.ta.mjs";
import { ASDU_smpSynch, _decode_ASDU_smpSynch, _encode_ASDU_smpSynch } from "../IEC61850/ASDU-smpSynch.ta.mjs";
// export { ASDU_smpSynch, ASDU_smpSynch_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, ASDU_smpSynch_local /* IMPORTED_LONG_NAMED_INTEGER */, local /* IMPORTED_SHORT_NAMED_INTEGER */, ASDU_smpSynch_global /* IMPORTED_LONG_NAMED_INTEGER */, global /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ASDU_smpSynch, _encode_ASDU_smpSynch } from "../IEC61850/ASDU-smpSynch.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../IEC61850/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../IEC61850/Data.ta.mjs";
import { ASDU_smpMod, _decode_ASDU_smpMod, _encode_ASDU_smpMod } from "../IEC61850/ASDU-smpMod.ta.mjs";
// export { ASDU_smpMod, ASDU_smpMod_samplesPerNormalPeriod /* IMPORTED_LONG_NAMED_INTEGER */, samplesPerNormalPeriod /* IMPORTED_SHORT_NAMED_INTEGER */, ASDU_smpMod_samplesPerSecond /* IMPORTED_LONG_NAMED_INTEGER */, samplesPerSecond /* IMPORTED_SHORT_NAMED_INTEGER */, ASDU_smpMod_secondsPerSample /* IMPORTED_LONG_NAMED_INTEGER */, secondsPerSample /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ASDU_smpMod, _encode_ASDU_smpMod } from "../IEC61850/ASDU-smpMod.ta.mjs";
import { GmidData, _decode_GmidData, _encode_GmidData } from "../IEC61850/GmidData.ta.mjs";
// export { GmidData, _decode_GmidData, _encode_GmidData } from "../IEC61850/GmidData.ta.mjs";


/**
 * @summary ASDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASDU ::= SEQUENCE {
 *     svID        [0] IMPLICIT VisibleString,
 *     datSet        [1] IMPLICIT VisibleString OPTIONAL,
 *     smpCnt        [2] IMPLICIT INTEGER(0..65535),
 *     confRev        [3] IMPLICIT INTEGER(0..4294967295),
 *     refrTm        [4] IMPLICIT UtcTime OPTIONAL,
 *     smpSynch    [5] IMPLICIT INTEGER{none(0),local(1),global(2)} OPTIONAL,
 *     smpRate        [6] IMPLICIT INTEGER(0..65535) OPTIONAL,
 *     seqData        [7] IMPLICIT Data,
 *     smpMod        [8] IMPLICIT INTEGER{
 *         samplesPerNormalPeriod(0),
 *         samplesPerSecond(1),
 *         secondsPerSample(2)
 *     } OPTIONAL,
 *     gmidData    [9] IMPLICIT GmidData OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ASDU {
    constructor (
        /**
         * @summary `svID`.
         * @public
         * @readonly
         */
        readonly svID: VisibleString,
        /**
         * @summary `datSet`.
         * @public
         * @readonly
         */
        readonly datSet: OPTIONAL<VisibleString>,
        /**
         * @summary `smpCnt`.
         * @public
         * @readonly
         */
        readonly smpCnt: INTEGER,
        /**
         * @summary `confRev`.
         * @public
         * @readonly
         */
        readonly confRev: INTEGER,
        /**
         * @summary `refrTm`.
         * @public
         * @readonly
         */
        readonly refrTm: OPTIONAL<UtcTime>,
        /**
         * @summary `smpSynch`.
         * @public
         * @readonly
         */
        readonly smpSynch: OPTIONAL<ASDU_smpSynch>,
        /**
         * @summary `smpRate`.
         * @public
         * @readonly
         */
        readonly smpRate: OPTIONAL<INTEGER>,
        /**
         * @summary `seqData`.
         * @public
         * @readonly
         */
        readonly seqData: Data,
        /**
         * @summary `smpMod`.
         * @public
         * @readonly
         */
        readonly smpMod: OPTIONAL<ASDU_smpMod>,
        /**
         * @summary `gmidData`.
         * @public
         * @readonly
         */
        readonly gmidData: OPTIONAL<GmidData>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ASDU
     * @description
     * 
     * This takes an `object` and converts it to a `ASDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ASDU`.
     * @returns {ASDU}
     */
    public static _from_object (_o: { [_K in keyof (ASDU)]: (ASDU)[_K] }): ASDU {
        return new ASDU(_o.svID, _o.datSet, _o.smpCnt, _o.confRev, _o.refrTm, _o.smpSynch, _o.smpRate, _o.seqData, _o.smpMod, _o.gmidData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ASDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ASDU: $.ComponentSpec[] = [
    new $.ComponentSpec("svID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("datSet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("smpCnt", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("confRev", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("refrTm", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("smpSynch", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("smpRate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("seqData", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("smpMod", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("gmidData", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ASDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ASDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ASDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ASDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ASDU: $.ASN1Decoder<ASDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASDU (el: _Element): ASDU {
    if (!_cached_decoder_for_ASDU) { _cached_decoder_for_ASDU = function (el: _Element): ASDU {
    let svID!: VisibleString;
    let datSet: OPTIONAL<VisibleString>;
    let smpCnt!: INTEGER;
    let confRev!: INTEGER;
    let refrTm: OPTIONAL<UtcTime>;
    let smpSynch: OPTIONAL<ASDU_smpSynch>;
    let smpRate: OPTIONAL<INTEGER>;
    let seqData!: Data;
    let smpMod: OPTIONAL<ASDU_smpMod>;
    let gmidData: OPTIONAL<GmidData>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "svID": (_el: _Element): void => { svID = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "datSet": (_el: _Element): void => { datSet = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "smpCnt": (_el: _Element): void => { smpCnt = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "confRev": (_el: _Element): void => { confRev = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "refrTm": (_el: _Element): void => { refrTm = $._decode_implicit<UtcTime>(() => _decode_UtcTime)(_el); },
        "smpSynch": (_el: _Element): void => { smpSynch = $._decode_implicit<ASDU_smpSynch>(() => _decode_ASDU_smpSynch)(_el); },
        "smpRate": (_el: _Element): void => { smpRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "seqData": (_el: _Element): void => { seqData = $._decode_implicit<Data>(() => _decode_Data)(_el); },
        "smpMod": (_el: _Element): void => { smpMod = $._decode_implicit<ASDU_smpMod>(() => _decode_ASDU_smpMod)(_el); },
        "gmidData": (_el: _Element): void => { gmidData = $._decode_implicit<GmidData>(() => _decode_GmidData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ASDU,
        _extension_additions_list_spec_for_ASDU,
        _root_component_type_list_2_spec_for_ASDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ASDU(
        svID,
        datSet,
        smpCnt,
        confRev,
        refrTm,
        smpSynch,
        smpRate,
        seqData,
        smpMod,
        gmidData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ASDU(el);
}

let _cached_encoder_for_ASDU: $.ASN1Encoder<ASDU> | null = null;

/**
 * @summary Encodes a(n) ASDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASDU, encoded as an ASN.1 Element.
 */
export
function _encode_ASDU (value: ASDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASDU) { _cached_encoder_for_ASDU = function (value: ASDU, elGetter: $.ASN1Encoder<ASDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.svID, $.BER),
            /* IF_ABSENT  */ ((value.datSet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.datSet, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.smpCnt, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.confRev, $.BER),
            /* IF_ABSENT  */ ((value.refrTm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_UtcTime, $.BER)(value.refrTm, $.BER)),
            /* IF_ABSENT  */ ((value.smpSynch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ASDU_smpSynch, $.BER)(value.smpSynch, $.BER)),
            /* IF_ABSENT  */ ((value.smpRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.smpRate, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_Data, $.BER)(value.seqData, $.BER),
            /* IF_ABSENT  */ ((value.smpMod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ASDU_smpMod, $.BER)(value.smpMod, $.BER)),
            /* IF_ABSENT  */ ((value.gmidData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GmidData, $.BER)(value.gmidData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ASDU(value, elGetter);
}


/* eslint-enable */
