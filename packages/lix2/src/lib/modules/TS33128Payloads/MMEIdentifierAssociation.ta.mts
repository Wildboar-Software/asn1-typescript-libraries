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
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";


/**
 * @summary MMEIdentifierAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEIdentifierAssociation ::= SEQUENCE
 * {
 *     iMSI        [1] IMSI,
 *     iMEI        [2] IMEI OPTIONAL,
 *     mSISDN      [3] MSISDN OPTIONAL,
 *     gUTI        [4] GUTI,
 *     location    [5] Location,
 *     tAIList     [6] TAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEIdentifierAssociation {
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
        readonly gUTI: GUTI,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: Location,
        /**
         * @summary `tAIList`.
         * @public
         * @readonly
         */
        readonly tAIList: OPTIONAL<TAIList>
    ) {}

    /**
     * @summary Restructures an object into a MMEIdentifierAssociation
     * @description
     * 
     * This takes an `object` and converts it to a `MMEIdentifierAssociation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEIdentifierAssociation`.
     * @returns {MMEIdentifierAssociation}
     */
    public static _from_object (_o: { [_K in keyof (MMEIdentifierAssociation)]: (MMEIdentifierAssociation)[_K] }): MMEIdentifierAssociation {
        return new MMEIdentifierAssociation(_o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location, _o.tAIList);
    }


}

/**
 * @summary The Leading Root Component Types of MMEIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEIdentifierAssociation: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("tAIList", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of MMEIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEIdentifierAssociation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEIdentifierAssociation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEIdentifierAssociation: $.ASN1Decoder<MMEIdentifierAssociation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEIdentifierAssociation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEIdentifierAssociation (el: _Element): MMEIdentifierAssociation {
    if (!_cached_decoder_for_MMEIdentifierAssociation) { _cached_decoder_for_MMEIdentifierAssociation = function (el: _Element): MMEIdentifierAssociation {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI!: GUTI;
    let location!: Location;
    let tAIList: OPTIONAL<TAIList>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "tAIList": (_el: _Element): void => { tAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEIdentifierAssociation,
        _extension_additions_list_spec_for_MMEIdentifierAssociation,
        _root_component_type_list_2_spec_for_MMEIdentifierAssociation,
        undefined,
    );
    return new MMEIdentifierAssociation(
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location,
        tAIList
    );
}; }
    return _cached_decoder_for_MMEIdentifierAssociation(el);
}

let _cached_encoder_for_MMEIdentifierAssociation: $.ASN1Encoder<MMEIdentifierAssociation> | null = null;

/**
 * @summary Encodes a(n) MMEIdentifierAssociation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEIdentifierAssociation, encoded as an ASN.1 Element.
 */
export
function _encode_MMEIdentifierAssociation (value: MMEIdentifierAssociation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEIdentifierAssociation) { _cached_encoder_for_MMEIdentifierAssociation = function (value: MMEIdentifierAssociation, elGetter: $.ASN1Encoder<MMEIdentifierAssociation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_GUTI, $.BER)(value.gUTI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER),
            /* IF_ABSENT  */ ((value.tAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TAIList, $.BER)(value.tAIList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMEIdentifierAssociation(value, elGetter);
}


/* eslint-enable */
