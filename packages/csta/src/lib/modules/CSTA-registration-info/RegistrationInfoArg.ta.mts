/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ServiceCrossRefID, _decode_ServiceCrossRefID, _encode_ServiceCrossRefID } from "../CSTA-capability-exchange/ServiceCrossRefID.ta.mjs";

import { RegistrationList, _decode_RegistrationList, _encode_RegistrationList } from "../CSTA-status-reporting/RegistrationList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RegistrationInfoArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationInfoArg ::= SEQUENCE
 * {     serviceCrossRefID        ServiceCrossRefID,
 *     segmentID            INTEGER                OPTIONAL,
 *     lastSegment            BOOLEAN,
 *     registrationList        RegistrationList,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RegistrationInfoArg {
    constructor (
        /**
         * @summary `serviceCrossRefID`.
         * @public
         * @readonly
         */
        readonly serviceCrossRefID: ServiceCrossRefID,
        /**
         * @summary `segmentID`.
         * @public
         * @readonly
         */
        readonly segmentID: OPTIONAL<INTEGER>,
        /**
         * @summary `lastSegment`.
         * @public
         * @readonly
         */
        readonly lastSegment: BOOLEAN,
        /**
         * @summary `registrationList`.
         * @public
         * @readonly
         */
        readonly registrationList: RegistrationList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RegistrationInfoArg
     * @description
     * 
     * This takes an `object` and converts it to a `RegistrationInfoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegistrationInfoArg`.
     * @returns {RegistrationInfoArg}
     */
    public static _from_object (_o: { [_K in keyof (RegistrationInfoArg)]: (RegistrationInfoArg)[_K] }): RegistrationInfoArg {
        return new RegistrationInfoArg(_o.serviceCrossRefID, _o.segmentID, _o.lastSegment, _o.registrationList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RegistrationInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegistrationInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("segmentID", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastSegment", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("registrationList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RegistrationInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegistrationInfoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegistrationInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegistrationInfoArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegistrationInfoArg: $.ASN1Decoder<RegistrationInfoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationInfoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationInfoArg (el: _Element): RegistrationInfoArg {
    if (!_cached_decoder_for_RegistrationInfoArg) { _cached_decoder_for_RegistrationInfoArg = function (el: _Element): RegistrationInfoArg {
    let serviceCrossRefID!: ServiceCrossRefID;
    let segmentID: OPTIONAL<INTEGER>;
    let lastSegment!: BOOLEAN;
    let registrationList!: RegistrationList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "serviceCrossRefID": (_el: _Element): void => { serviceCrossRefID = _decode_ServiceCrossRefID(_el); },
        "segmentID": (_el: _Element): void => { segmentID = $._decodeInteger(_el); },
        "lastSegment": (_el: _Element): void => { lastSegment = $._decodeBoolean(_el); },
        "registrationList": (_el: _Element): void => { registrationList = _decode_RegistrationList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegistrationInfoArg,
        _extension_additions_list_spec_for_RegistrationInfoArg,
        _root_component_type_list_2_spec_for_RegistrationInfoArg,
        undefined,
    );
    return new RegistrationInfoArg(
        serviceCrossRefID,
        segmentID,
        lastSegment,
        registrationList,
        extensions
    );
}; }
    return _cached_decoder_for_RegistrationInfoArg(el);
}

let _cached_encoder_for_RegistrationInfoArg: $.ASN1Encoder<RegistrationInfoArg> | null = null;

/**
 * @summary Encodes a(n) RegistrationInfoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationInfoArg, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationInfoArg (value: RegistrationInfoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationInfoArg) { _cached_encoder_for_RegistrationInfoArg = function (value: RegistrationInfoArg, elGetter: $.ASN1Encoder<RegistrationInfoArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceCrossRefID(value.serviceCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.segmentID === undefined) ? undefined : $._encodeInteger(value.segmentID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.lastSegment, $.BER),
            /* REQUIRED   */ _encode_RegistrationList(value.registrationList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegistrationInfoArg(value, elGetter);
}


/* eslint-enable */
