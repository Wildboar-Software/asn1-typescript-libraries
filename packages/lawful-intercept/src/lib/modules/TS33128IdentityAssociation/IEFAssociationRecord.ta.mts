/* eslint-disable */
import {
    GeneralizedTime,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128IdentityAssociation/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128IdentityAssociation/SUPI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128IdentityAssociation/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128IdentityAssociation/FiveGGUTI.ta.mjs";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128IdentityAssociation/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128IdentityAssociation/TAI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128IdentityAssociation/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128IdentityAssociation/NCGI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128IdentityAssociation/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128IdentityAssociation/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128IdentityAssociation/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128IdentityAssociation/PEI.ta.mjs";
import { FiveGSTAIList, _decode_FiveGSTAIList, _encode_FiveGSTAIList } from "../TS33128IdentityAssociation/FiveGSTAIList.ta.mjs";
// export { FiveGSTAIList, _decode_FiveGSTAIList, _encode_FiveGSTAIList } from "../TS33128IdentityAssociation/FiveGSTAIList.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128IdentityAssociation/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128IdentityAssociation/GPSI.ta.mjs";
import { AdditionalCGIs, _decode_AdditionalCGIs, _encode_AdditionalCGIs } from "../TS33128IdentityAssociation/AdditionalCGIs.ta.mjs";
// export { AdditionalCGIs, _decode_AdditionalCGIs, _encode_AdditionalCGIs } from "../TS33128IdentityAssociation/AdditionalCGIs.ta.mjs";


/**
 * @summary IEFAssociationRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IEFAssociationRecord ::= SEQUENCE
 * {
 *     sUPI            [1] SUPI,
 *     fiveGGUTI       [2] FiveGGUTI,
 *     timestamp       [3] GeneralizedTime,
 *     tAI             [4] TAI,
 *     nCGI            [5] NCGI,
 *     nCGITime        [6] GeneralizedTime,
 *     sUCI            [7] SUCI OPTIONAL,
 *     pEI             [8] PEI OPTIONAL,
 *     fiveGSTAIList   [9] FiveGSTAIList OPTIONAL,
 *     gPSI            [10] GPSI OPTIONAL,
 *     additionalCGIs  [11] AdditionalCGIs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IEFAssociationRecord {
    /**
     * @summary `sUPI`.
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `fiveGGUTI`.
     * @public
     * @readonly
     */
    readonly fiveGGUTI: FiveGGUTI;
    /**
     * @summary `timestamp`.
     * @public
     * @readonly
     */
    readonly timestamp: GeneralizedTime;
    /**
     * @summary `tAI`.
     * @public
     * @readonly
     */
    readonly tAI: TAI;
    /**
     * @summary `nCGI`.
     * @public
     * @readonly
     */
    readonly nCGI: NCGI;
    /**
     * @summary `nCGITime`.
     * @public
     * @readonly
     */
    readonly nCGITime: GeneralizedTime;
    /**
     * @summary `sUCI`.
     * @public
     * @readonly
     */
    readonly sUCI: OPTIONAL<SUCI>;
    /**
     * @summary `pEI`.
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `fiveGSTAIList`.
     * @public
     * @readonly
     */
    readonly fiveGSTAIList: OPTIONAL<FiveGSTAIList>;
    /**
     * @summary `gPSI`.
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `additionalCGIs`.
     * @public
     * @readonly
     */
    readonly additionalCGIs: OPTIONAL<AdditionalCGIs>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        fiveGGUTI: FiveGGUTI,
        timestamp: GeneralizedTime,
        tAI: TAI,
        nCGI: NCGI,
        nCGITime: GeneralizedTime,
        sUCI: OPTIONAL<SUCI>,
        pEI: OPTIONAL<PEI>,
        fiveGSTAIList: OPTIONAL<FiveGSTAIList>,
        gPSI: OPTIONAL<GPSI>,
        additionalCGIs: OPTIONAL<AdditionalCGIs>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.fiveGGUTI = fiveGGUTI;
        this.timestamp = timestamp;
        this.tAI = tAI;
        this.nCGI = nCGI;
        this.nCGITime = nCGITime;
        this.sUCI = sUCI;
        this.pEI = pEI;
        this.fiveGSTAIList = fiveGSTAIList;
        this.gPSI = gPSI;
        this.additionalCGIs = additionalCGIs;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IEFAssociationRecord
     * @description
     * 
     * This takes an `object` and converts it to a `IEFAssociationRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IEFAssociationRecord`.
     * @returns {IEFAssociationRecord}
     */
    public static _from_object (_o: { [_K in keyof (IEFAssociationRecord)]: (IEFAssociationRecord)[_K] }): IEFAssociationRecord {
        return new IEFAssociationRecord(_o.sUPI, _o.fiveGGUTI, _o.timestamp, _o.tAI, _o.nCGI, _o.nCGITime, _o.sUCI, _o.pEI, _o.fiveGSTAIList, _o.gPSI, _o.additionalCGIs, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IEFAssociationRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IEFAssociationRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGGUTI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tAI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nCGI", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nCGITime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("fiveGSTAIList", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("additionalCGIs", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of IEFAssociationRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IEFAssociationRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IEFAssociationRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IEFAssociationRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IEFAssociationRecord: $.ASN1Decoder<IEFAssociationRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IEFAssociationRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IEFAssociationRecord (el: _Element): IEFAssociationRecord {
    if (!_cached_decoder_for_IEFAssociationRecord) { _cached_decoder_for_IEFAssociationRecord = function (el: _Element): IEFAssociationRecord {
    let sUPI!: SUPI;
    let fiveGGUTI!: FiveGGUTI;
    let timestamp!: GeneralizedTime;
    let tAI!: TAI;
    let nCGI!: NCGI;
    let nCGITime!: GeneralizedTime;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let fiveGSTAIList: OPTIONAL<FiveGSTAIList>;
    let gPSI: OPTIONAL<GPSI>;
    let additionalCGIs: OPTIONAL<AdditionalCGIs>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "fiveGGUTI": (_el: _Element): void => { fiveGGUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); },
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "nCGITime": (_el: _Element): void => { nCGITime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<FiveGSTAIList>(() => _decode_FiveGSTAIList)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "additionalCGIs": (_el: _Element): void => { additionalCGIs = $._decode_implicit<AdditionalCGIs>(() => _decode_AdditionalCGIs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IEFAssociationRecord,
        _extension_additions_list_spec_for_IEFAssociationRecord,
        _root_component_type_list_2_spec_for_IEFAssociationRecord,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IEFAssociationRecord(
        sUPI,
        fiveGGUTI,
        timestamp,
        tAI,
        nCGI,
        nCGITime,
        sUCI,
        pEI,
        fiveGSTAIList,
        gPSI,
        additionalCGIs,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IEFAssociationRecord(el);
}

let _cached_encoder_for_IEFAssociationRecord: $.ASN1Encoder<IEFAssociationRecord> | null = null;

/**
 * @summary Encodes a(n) IEFAssociationRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IEFAssociationRecord, encoded as an ASN.1 Element.
 */
export
function _encode_IEFAssociationRecord (value: IEFAssociationRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IEFAssociationRecord) { _cached_encoder_for_IEFAssociationRecord = function (value: IEFAssociationRecord, _elGetter: $.ASN1Encoder<IEFAssociationRecord>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGGUTI, $.BER)(value.fiveGGUTI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeGeneralizedTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TAI, $.BER)(value.tAI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_NCGI, $.BER)(value.nCGI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeGeneralizedTime, $.BER)(value.nCGITime, $.BER);
    if (value.sUCI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SUCI, $.BER)(value.sUCI, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.fiveGSTAIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_FiveGSTAIList, $.BER)(value.fiveGSTAIList, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.additionalCGIs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_AdditionalCGIs, $.BER)(value.additionalCGIs, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IEFAssociationRecord(value, elGetter);
}


/* eslint-enable */
