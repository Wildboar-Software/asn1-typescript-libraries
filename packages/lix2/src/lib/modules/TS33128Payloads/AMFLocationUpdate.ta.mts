/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SMSOverNASIndicator, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator, _enum_for_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
// export { SMSOverNASIndicator, _enum_for_SMSOverNASIndicator, SMSOverNASIndicator_sMSOverNASNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSOverNASIndicator_sMSOverNASAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
import { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
// export { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
import { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
// export { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFLocationUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFLocationUpdate ::= SEQUENCE
 * {
 *     sUPI                            [1] SUPI,
 *     sUCI                            [2] SUCI OPTIONAL,
 *     pEI                             [3] PEI OPTIONAL,
 *     gPSI                            [4] GPSI OPTIONAL,
 *     gUTI                            [5] FiveGGUTI OPTIONAL,
 *     location                        [6] Location,
 *     deprecatedSMSOverNASIndicator   [7] SMSOverNASIndicator OPTIONAL,
 *     deprecatedOldGUTI               [8] EPS5GGUTI OPTIONAL,
 *     uEAreaIndication                [9] UEAreaIndication OPTIONAL,
 *     additionalUserIdentifiers       [10] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFLocationUpdate {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: OPTIONAL<SUCI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<FiveGGUTI>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: Location,
        /**
         * @summary `deprecatedSMSOverNASIndicator`.
         * @public
         * @readonly
         */
        readonly deprecatedSMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>,
        /**
         * @summary `deprecatedOldGUTI`.
         * @public
         * @readonly
         */
        readonly deprecatedOldGUTI: OPTIONAL<EPS5GGUTI>,
        /**
         * @summary `uEAreaIndication`.
         * @public
         * @readonly
         */
        readonly uEAreaIndication: OPTIONAL<UEAreaIndication>,
        /**
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFLocationUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `AMFLocationUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFLocationUpdate`.
     * @returns {AMFLocationUpdate}
     */
    public static _from_object (_o: { [_K in keyof (AMFLocationUpdate)]: (AMFLocationUpdate)[_K] }): AMFLocationUpdate {
        return new AMFLocationUpdate(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.deprecatedSMSOverNASIndicator, _o.deprecatedOldGUTI, _o.uEAreaIndication, _o.additionalUserIdentifiers);
    }

        /**
         * @summary The enum used as the type of the component `deprecatedSMSOverNASIndicator`
         * @public
         * @static
         */

    public static _enum_for_deprecatedSMSOverNASIndicator = _enum_for_SMSOverNASIndicator;
}

/**
 * @summary The Leading Root Component Types of AMFLocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFLocationUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("deprecatedSMSOverNASIndicator", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deprecatedOldGUTI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uEAreaIndication", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of AMFLocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFLocationUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFLocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFLocationUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFLocationUpdate: $.ASN1Decoder<AMFLocationUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFLocationUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFLocationUpdate (el: _Element): AMFLocationUpdate {
    if (!_cached_decoder_for_AMFLocationUpdate) { _cached_decoder_for_AMFLocationUpdate = function (el: _Element): AMFLocationUpdate {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let location!: Location;
    let deprecatedSMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>;
    let deprecatedOldGUTI: OPTIONAL<EPS5GGUTI>;
    let uEAreaIndication: OPTIONAL<UEAreaIndication>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "deprecatedSMSOverNASIndicator": (_el: _Element): void => { deprecatedSMSOverNASIndicator = $._decode_implicit<SMSOverNASIndicator>(() => _decode_SMSOverNASIndicator)(_el); },
        "deprecatedOldGUTI": (_el: _Element): void => { deprecatedOldGUTI = $._decode_explicit<EPS5GGUTI>(() => _decode_EPS5GGUTI)(_el); },
        "uEAreaIndication": (_el: _Element): void => { uEAreaIndication = $._decode_implicit<UEAreaIndication>(() => _decode_UEAreaIndication)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFLocationUpdate,
        _extension_additions_list_spec_for_AMFLocationUpdate,
        _root_component_type_list_2_spec_for_AMFLocationUpdate,
        undefined,
    );
    return new AMFLocationUpdate(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        deprecatedSMSOverNASIndicator,
        deprecatedOldGUTI,
        uEAreaIndication,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFLocationUpdate(el);
}

let _cached_encoder_for_AMFLocationUpdate: $.ASN1Encoder<AMFLocationUpdate> | null = null;

/**
 * @summary Encodes a(n) AMFLocationUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFLocationUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_AMFLocationUpdate (value: AMFLocationUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFLocationUpdate) { _cached_encoder_for_AMFLocationUpdate = function (value: AMFLocationUpdate, elGetter: $.ASN1Encoder<AMFLocationUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER),
            /* IF_ABSENT  */ ((value.deprecatedSMSOverNASIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SMSOverNASIndicator, $.BER)(value.deprecatedSMSOverNASIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedOldGUTI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_EPS5GGUTI, $.BER)(value.deprecatedOldGUTI, $.BER)),
            /* IF_ABSENT  */ ((value.uEAreaIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_UEAreaIndication, $.BER)(value.uEAreaIndication, $.BER)),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFLocationUpdate(value, elGetter);
}


/* eslint-enable */
