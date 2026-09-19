/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";


/**
 * @summary EPSSubscriberIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSubscriberIDs ::= SEQUENCE
 * {
 *     iMSI   [1] IMSI OPTIONAL,
 *     mSISDN [2] MSISDN OPTIONAL,
 *     iMEI   [3] IMEI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSSubscriberIDs {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>
    ) {}

    /**
     * @summary Restructures an object into a EPSSubscriberIDs
     * @description
     * 
     * This takes an `object` and converts it to a `EPSSubscriberIDs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSSubscriberIDs`.
     * @returns {EPSSubscriberIDs}
     */
    public static _from_object (_o: { [_K in keyof (EPSSubscriberIDs)]: (EPSSubscriberIDs)[_K] }): EPSSubscriberIDs {
        return new EPSSubscriberIDs(_o.iMSI, _o.mSISDN, _o.iMEI);
    }


}

/**
 * @summary The Leading Root Component Types of EPSSubscriberIDs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSSubscriberIDs: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EPSSubscriberIDs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSSubscriberIDs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSSubscriberIDs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSSubscriberIDs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSSubscriberIDs: $.ASN1Decoder<EPSSubscriberIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSSubscriberIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSSubscriberIDs (el: _Element): EPSSubscriberIDs {
    if (!_cached_decoder_for_EPSSubscriberIDs) { _cached_decoder_for_EPSSubscriberIDs = function (el: _Element): EPSSubscriberIDs {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let iMEI: OPTIONAL<IMEI>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSSubscriberIDs,
        _extension_additions_list_spec_for_EPSSubscriberIDs,
        _root_component_type_list_2_spec_for_EPSSubscriberIDs,
        undefined,
    );
    return new EPSSubscriberIDs(
        iMSI,
        mSISDN,
        iMEI
    );
}; }
    return _cached_decoder_for_EPSSubscriberIDs(el);
}

let _cached_encoder_for_EPSSubscriberIDs: $.ASN1Encoder<EPSSubscriberIDs> | null = null;

/**
 * @summary Encodes a(n) EPSSubscriberIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSSubscriberIDs, encoded as an ASN.1 Element.
 */
export
function _encode_EPSSubscriberIDs (value: EPSSubscriberIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSSubscriberIDs) { _cached_encoder_for_EPSSubscriberIDs = function (value: EPSSubscriberIDs, elGetter: $.ASN1Encoder<EPSSubscriberIDs>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IMEI, $.BER)(value.iMEI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSSubscriberIDs(value, elGetter);
}


/* eslint-enable */
