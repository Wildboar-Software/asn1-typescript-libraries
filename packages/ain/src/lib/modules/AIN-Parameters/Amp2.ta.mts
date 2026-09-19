/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AmpAINNodeID, _decode_AmpAINNodeID, _encode_AmpAINNodeID } from "../AIN-Parameters/AmpAINNodeID.ta.mjs";
// export { AmpAINNodeID, _decode_AmpAINNodeID, _encode_AmpAINNodeID } from "../AIN-Parameters/AmpAINNodeID.ta.mjs";
import { AmpCLogSeqNo, _decode_AmpCLogSeqNo, _encode_AmpCLogSeqNo } from "../AIN-Parameters/AmpCLogSeqNo.ta.mjs";
// export { AmpCLogSeqNo, _decode_AmpCLogSeqNo, _encode_AmpCLogSeqNo } from "../AIN-Parameters/AmpCLogSeqNo.ta.mjs";
import { AmpCLogRepInd, _decode_AmpCLogRepInd, _encode_AmpCLogRepInd, _enum_for_AmpCLogRepInd } from "../AIN-Parameters/AmpCLogRepInd.ta.mjs";
// export { AmpCLogRepInd, _enum_for_AmpCLogRepInd, AmpCLogRepInd_autoReportOS /* IMPORTED_LONG_ENUMERATION_ITEM */, autoReportOS /* IMPORTED_SHORT_ENUMERATION_ITEM */, AmpCLogRepInd_requestReport /* IMPORTED_LONG_ENUMERATION_ITEM */, requestReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, AmpCLogRepInd_autoReportISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, autoReportISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AmpCLogRepInd, _encode_AmpCLogRepInd } from "../AIN-Parameters/AmpCLogRepInd.ta.mjs";
import { AmpCallProgInd, _decode_AmpCallProgInd, _encode_AmpCallProgInd, _enum_for_AmpCallProgInd } from "../AIN-Parameters/AmpCallProgInd.ta.mjs";
// export { AmpCallProgInd, _enum_for_AmpCallProgInd, AmpCallProgInd_callProgressVoiceAnnouncements /* IMPORTED_LONG_ENUMERATION_ITEM */, callProgressVoiceAnnouncements /* IMPORTED_SHORT_ENUMERATION_ITEM */, AmpCallProgInd_callProgressTextMessages /* IMPORTED_LONG_ENUMERATION_ITEM */, callProgressTextMessages /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AmpCallProgInd, _encode_AmpCallProgInd } from "../AIN-Parameters/AmpCallProgInd.ta.mjs";
import { AmpTestReqInd, _decode_AmpTestReqInd, _encode_AmpTestReqInd } from "../AIN-Parameters/AmpTestReqInd.ta.mjs";
// export { AmpTestReqInd, _decode_AmpTestReqInd, _encode_AmpTestReqInd } from "../AIN-Parameters/AmpTestReqInd.ta.mjs";
import { AmpCLogName, _decode_AmpCLogName, _encode_AmpCLogName } from "../AIN-Parameters/AmpCLogName.ta.mjs";
// export { AmpCLogName, _decode_AmpCLogName, _encode_AmpCLogName } from "../AIN-Parameters/AmpCLogName.ta.mjs";
import { AmpSvcProvID, _decode_AmpSvcProvID, _encode_AmpSvcProvID } from "../AIN-Parameters/AmpSvcProvID.ta.mjs";
// export { AmpSvcProvID, _decode_AmpSvcProvID, _encode_AmpSvcProvID } from "../AIN-Parameters/AmpSvcProvID.ta.mjs";


/**
 * @summary Amp2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Amp2 ::= [109] IMPLICIT SEQUENCE{
 *         ampAINNodeID    AmpAINNodeID,
 *         ampCLogSeqNo    [3] IMPLICIT AmpCLogSeqNo OPTIONAL,
 *         ampCLogRepInd   [4] IMPLICIT AmpCLogRepInd OPTIONAL,
 *         ampCallProgInd  [5] IMPLICIT AmpCallProgInd OPTIONAL,
 *         ampTestReqInd   [6] IMPLICIT AmpTestReqInd OPTIONAL,
 *         ampCLogName     [7] IMPLICIT AmpCLogName OPTIONAL,
 *         ampSvcProvID    [8] IMPLICIT AmpSvcProvID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class Amp2 {
    constructor (
        /**
         * @summary `ampAINNodeID`.
         * @public
         * @readonly
         */
        readonly ampAINNodeID: AmpAINNodeID,
        /**
         * @summary `ampCLogSeqNo`.
         * @public
         * @readonly
         */
        readonly ampCLogSeqNo: OPTIONAL<AmpCLogSeqNo>,
        /**
         * @summary `ampCLogRepInd`.
         * @public
         * @readonly
         */
        readonly ampCLogRepInd: OPTIONAL<AmpCLogRepInd>,
        /**
         * @summary `ampCallProgInd`.
         * @public
         * @readonly
         */
        readonly ampCallProgInd: OPTIONAL<AmpCallProgInd>,
        /**
         * @summary `ampTestReqInd`.
         * @public
         * @readonly
         */
        readonly ampTestReqInd: OPTIONAL<AmpTestReqInd>,
        /**
         * @summary `ampCLogName`.
         * @public
         * @readonly
         */
        readonly ampCLogName: OPTIONAL<AmpCLogName>,
        /**
         * @summary `ampSvcProvID`.
         * @public
         * @readonly
         */
        readonly ampSvcProvID: OPTIONAL<AmpSvcProvID>
    ) {}

    /**
     * @summary Restructures an object into a Amp2
     * @description
     * 
     * This takes an `object` and converts it to a `Amp2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Amp2`.
     * @returns {Amp2}
     */
    public static _from_object (_o: { [_K in keyof (Amp2)]: (Amp2)[_K] }): Amp2 {
        return new Amp2(_o.ampAINNodeID, _o.ampCLogSeqNo, _o.ampCLogRepInd, _o.ampCallProgInd, _o.ampTestReqInd, _o.ampCLogName, _o.ampSvcProvID);
    }

        /**
         * @summary The enum used as the type of the component `ampCLogRepInd`
         * @public
         * @static
         */

    public static _enum_for_ampCLogRepInd = _enum_for_AmpCLogRepInd;        /**
         * @summary The enum used as the type of the component `ampCallProgInd`
         * @public
         * @static
         */

    public static _enum_for_ampCallProgInd = _enum_for_AmpCallProgInd;
}

/**
 * @summary The Leading Root Component Types of Amp2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Amp2: $.ComponentSpec[] = [
    new $.ComponentSpec("ampAINNodeID", false, $.hasAnyTag),
    new $.ComponentSpec("ampCLogSeqNo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ampCLogRepInd", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ampCallProgInd", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ampTestReqInd", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ampCLogName", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ampSvcProvID", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Amp2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Amp2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Amp2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Amp2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Amp2: $.ASN1Decoder<Amp2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Amp2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Amp2 (el: _Element): Amp2 {
    if (!_cached_decoder_for_Amp2) { _cached_decoder_for_Amp2 = $._decode_implicit<Amp2>(() => function (el: _Element): Amp2 {
    let ampAINNodeID!: AmpAINNodeID;
    let ampCLogSeqNo: OPTIONAL<AmpCLogSeqNo>;
    let ampCLogRepInd: OPTIONAL<AmpCLogRepInd>;
    let ampCallProgInd: OPTIONAL<AmpCallProgInd>;
    let ampTestReqInd: OPTIONAL<AmpTestReqInd>;
    let ampCLogName: OPTIONAL<AmpCLogName>;
    let ampSvcProvID: OPTIONAL<AmpSvcProvID>;
    const callbacks: $.DecodingMap = {
        "ampAINNodeID": (_el: _Element): void => { ampAINNodeID = _decode_AmpAINNodeID(_el); },
        "ampCLogSeqNo": (_el: _Element): void => { ampCLogSeqNo = $._decode_implicit<AmpCLogSeqNo>(() => _decode_AmpCLogSeqNo)(_el); },
        "ampCLogRepInd": (_el: _Element): void => { ampCLogRepInd = $._decode_implicit<AmpCLogRepInd>(() => _decode_AmpCLogRepInd)(_el); },
        "ampCallProgInd": (_el: _Element): void => { ampCallProgInd = $._decode_implicit<AmpCallProgInd>(() => _decode_AmpCallProgInd)(_el); },
        "ampTestReqInd": (_el: _Element): void => { ampTestReqInd = $._decode_implicit<AmpTestReqInd>(() => _decode_AmpTestReqInd)(_el); },
        "ampCLogName": (_el: _Element): void => { ampCLogName = $._decode_implicit<AmpCLogName>(() => _decode_AmpCLogName)(_el); },
        "ampSvcProvID": (_el: _Element): void => { ampSvcProvID = $._decode_explicit<AmpSvcProvID>(() => _decode_AmpSvcProvID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Amp2,
        _extension_additions_list_spec_for_Amp2,
        _root_component_type_list_2_spec_for_Amp2,
        undefined,
    );
    return new Amp2(
        ampAINNodeID,
        ampCLogSeqNo,
        ampCLogRepInd,
        ampCallProgInd,
        ampTestReqInd,
        ampCLogName,
        ampSvcProvID
    );
}); }
    return _cached_decoder_for_Amp2(el);
}

let _cached_encoder_for_Amp2: $.ASN1Encoder<Amp2> | null = null;

/**
 * @summary Encodes a(n) Amp2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Amp2, encoded as an ASN.1 Element.
 */
export
function _encode_Amp2 (value: Amp2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Amp2) { _cached_encoder_for_Amp2 = $._encode_implicit(_TagClass.context, 109, () => function (value: Amp2, elGetter: $.ASN1Encoder<Amp2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AmpAINNodeID(value.ampAINNodeID, $.BER),
            /* IF_ABSENT  */ ((value.ampCLogSeqNo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AmpCLogSeqNo, $.BER)(value.ampCLogSeqNo, $.BER)),
            /* IF_ABSENT  */ ((value.ampCLogRepInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AmpCLogRepInd, $.BER)(value.ampCLogRepInd, $.BER)),
            /* IF_ABSENT  */ ((value.ampCallProgInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AmpCallProgInd, $.BER)(value.ampCallProgInd, $.BER)),
            /* IF_ABSENT  */ ((value.ampTestReqInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AmpTestReqInd, $.BER)(value.ampTestReqInd, $.BER)),
            /* IF_ABSENT  */ ((value.ampCLogName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AmpCLogName, $.BER)(value.ampCLogName, $.BER)),
            /* IF_ABSENT  */ ((value.ampSvcProvID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_AmpSvcProvID, $.BER)(value.ampSvcProvID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Amp2(value, elGetter);
}


/* eslint-enable */
