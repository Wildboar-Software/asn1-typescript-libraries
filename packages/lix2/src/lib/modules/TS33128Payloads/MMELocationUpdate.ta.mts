/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EPSSMSServiceStatus, _decode_EPSSMSServiceStatus, _encode_EPSSMSServiceStatus, _enum_for_EPSSMSServiceStatus } from "../TS33128Payloads/EPSSMSServiceStatus.ta.mjs";
// export { EPSSMSServiceStatus, _enum_for_EPSSMSServiceStatus, EPSSMSServiceStatus_sMSServicesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSServicesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSServicesNotAvailableInThisPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSSMSServiceStatus_networkFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, networkFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EPSSMSServiceStatus_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EPSSMSServiceStatus, _encode_EPSSMSServiceStatus } from "../TS33128Payloads/EPSSMSServiceStatus.ta.mjs";


/**
 * @summary MMELocationUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMELocationUpdate ::= SEQUENCE
 * {
 *     iMSI             [1] IMSI,
 *     iMEI             [2] IMEI OPTIONAL,
 *     mSISDN           [3] MSISDN OPTIONAL,
 *     gUTI             [4] GUTI OPTIONAL,
 *     location         [5] Location OPTIONAL,
 *     oldGUTI          [6] GUTI OPTIONAL,
 *     sMSServiceStatus [7] EPSSMSServiceStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMELocationUpdate {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: IMSI,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<GUTI>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `oldGUTI`.
         * @public
         * @readonly
         */
        readonly oldGUTI: OPTIONAL<GUTI>,
        /**
         * @summary `sMSServiceStatus`.
         * @public
         * @readonly
         */
        readonly sMSServiceStatus: OPTIONAL<EPSSMSServiceStatus>
    ) {}

    /**
     * @summary Restructures an object into a MMELocationUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `MMELocationUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMELocationUpdate`.
     * @returns {MMELocationUpdate}
     */
    public static _from_object (_o: { [_K in keyof (MMELocationUpdate)]: (MMELocationUpdate)[_K] }): MMELocationUpdate {
        return new MMELocationUpdate(_o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location, _o.oldGUTI, _o.sMSServiceStatus);
    }

        /**
         * @summary The enum used as the type of the component `sMSServiceStatus`
         * @public
         * @static
         */

    public static _enum_for_sMSServiceStatus = _enum_for_EPSSMSServiceStatus;
}

/**
 * @summary The Leading Root Component Types of MMELocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMELocationUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("oldGUTI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMSServiceStatus", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MMELocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMELocationUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMELocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMELocationUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMELocationUpdate: $.ASN1Decoder<MMELocationUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMELocationUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMELocationUpdate (el: _Element): MMELocationUpdate {
    if (!_cached_decoder_for_MMELocationUpdate) { _cached_decoder_for_MMELocationUpdate = function (el: _Element): MMELocationUpdate {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI: OPTIONAL<GUTI>;
    let location: OPTIONAL<Location>;
    let oldGUTI: OPTIONAL<GUTI>;
    let sMSServiceStatus: OPTIONAL<EPSSMSServiceStatus>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "oldGUTI": (_el: _Element): void => { oldGUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "sMSServiceStatus": (_el: _Element): void => { sMSServiceStatus = $._decode_implicit<EPSSMSServiceStatus>(() => _decode_EPSSMSServiceStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMELocationUpdate,
        _extension_additions_list_spec_for_MMELocationUpdate,
        _root_component_type_list_2_spec_for_MMELocationUpdate,
        undefined,
    );
    return new MMELocationUpdate(
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location,
        oldGUTI,
        sMSServiceStatus
    );
}; }
    return _cached_decoder_for_MMELocationUpdate(el);
}

let _cached_encoder_for_MMELocationUpdate: $.ASN1Encoder<MMELocationUpdate> | null = null;

/**
 * @summary Encodes a(n) MMELocationUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMELocationUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_MMELocationUpdate (value: MMELocationUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMELocationUpdate) { _cached_encoder_for_MMELocationUpdate = function (value: MMELocationUpdate, elGetter: $.ASN1Encoder<MMELocationUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GUTI, $.BER)(value.gUTI, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.oldGUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GUTI, $.BER)(value.oldGUTI, $.BER)),
            /* IF_ABSENT  */ ((value.sMSServiceStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_EPSSMSServiceStatus, $.BER)(value.sMSServiceStatus, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMELocationUpdate(value, elGetter);
}


/* eslint-enable */
