/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
import { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
// export { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
import { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
// export { SAI, _decode_SAI, _encode_SAI } from "../TS33128Payloads/SAI.ta.mjs";
import { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
// export { RAI, _decode_RAI, _encode_RAI } from "../TS33128Payloads/RAI.ta.mjs";
import { GeographicalInformationOctet, _decode_GeographicalInformationOctet, _encode_GeographicalInformationOctet } from "../TS33128Payloads/GeographicalInformationOctet.ta.mjs";
// export { GeographicalInformationOctet, _decode_GeographicalInformationOctet, _encode_GeographicalInformationOctet } from "../TS33128Payloads/GeographicalInformationOctet.ta.mjs";
import { GeodeticInformationOctet, _decode_GeodeticInformationOctet, _encode_GeodeticInformationOctet } from "../TS33128Payloads/GeodeticInformationOctet.ta.mjs";
// export { GeodeticInformationOctet, _decode_GeodeticInformationOctet, _encode_GeodeticInformationOctet } from "../TS33128Payloads/GeodeticInformationOctet.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../TS33128Payloads/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../TS33128Payloads/UserCSGInformation.ta.mjs";


/**
 * @summary SGSNLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNLocationInformation ::= SEQUENCE
 * {
 *     cGI                      [1] CGI OPTIONAL,
 *     lAI                      [2] LAI OPTIONAL,
 *     sAI                      [3] SAI OPTIONAL,
 *     rAI                      [4] RAI OPTIONAL,
 *     geographicalInformation  [5] GeographicalInformationOctet OPTIONAL,
 *     geodeticInformation      [6] GeodeticInformationOctet OPTIONAL,
 *     currentLocationRetrieved [7] BOOLEAN OPTIONAL,
 *     ageOfLocationInformation [8] INTEGER OPTIONAL,
 *     userCSGInformation       [9] UserCSGInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SGSNLocationInformation {
    constructor (
        /**
         * @summary `cGI`.
         * @public
         * @readonly
         */
        readonly cGI: OPTIONAL<CGI>,
        /**
         * @summary `lAI`.
         * @public
         * @readonly
         */
        readonly lAI: OPTIONAL<LAI>,
        /**
         * @summary `sAI`.
         * @public
         * @readonly
         */
        readonly sAI: OPTIONAL<SAI>,
        /**
         * @summary `rAI`.
         * @public
         * @readonly
         */
        readonly rAI: OPTIONAL<RAI>,
        /**
         * @summary `geographicalInformation`.
         * @public
         * @readonly
         */
        readonly geographicalInformation: OPTIONAL<GeographicalInformationOctet>,
        /**
         * @summary `geodeticInformation`.
         * @public
         * @readonly
         */
        readonly geodeticInformation: OPTIONAL<GeodeticInformationOctet>,
        /**
         * @summary `currentLocationRetrieved`.
         * @public
         * @readonly
         */
        readonly currentLocationRetrieved: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ageOfLocationInformation`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInformation: OPTIONAL<INTEGER>,
        /**
         * @summary `userCSGInformation`.
         * @public
         * @readonly
         */
        readonly userCSGInformation: OPTIONAL<UserCSGInformation>
    ) {}

    /**
     * @summary Restructures an object into a SGSNLocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNLocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNLocationInformation`.
     * @returns {SGSNLocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (SGSNLocationInformation)]: (SGSNLocationInformation)[_K] }): SGSNLocationInformation {
        return new SGSNLocationInformation(_o.cGI, _o.lAI, _o.sAI, _o.rAI, _o.geographicalInformation, _o.geodeticInformation, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.userCSGInformation);
    }


}

/**
 * @summary The Leading Root Component Types of SGSNLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNLocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cGI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SGSNLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNLocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNLocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNLocationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNLocationInformation: $.ASN1Decoder<SGSNLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNLocationInformation (el: _Element): SGSNLocationInformation {
    if (!_cached_decoder_for_SGSNLocationInformation) { _cached_decoder_for_SGSNLocationInformation = function (el: _Element): SGSNLocationInformation {
    let cGI: OPTIONAL<CGI>;
    let lAI: OPTIONAL<LAI>;
    let sAI: OPTIONAL<SAI>;
    let rAI: OPTIONAL<RAI>;
    let geographicalInformation: OPTIONAL<GeographicalInformationOctet>;
    let geodeticInformation: OPTIONAL<GeodeticInformationOctet>;
    let currentLocationRetrieved: OPTIONAL<BOOLEAN>;
    let ageOfLocationInformation: OPTIONAL<INTEGER>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    const callbacks: $.DecodingMap = {
        "cGI": (_el: _Element): void => { cGI = $._decode_implicit<CGI>(() => _decode_CGI)(_el); },
        "lAI": (_el: _Element): void => { lAI = $._decode_implicit<LAI>(() => _decode_LAI)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<SAI>(() => _decode_SAI)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<RAI>(() => _decode_RAI)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformationOctet>(() => _decode_GeographicalInformationOctet)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<GeodeticInformationOctet>(() => _decode_GeodeticInformationOctet)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNLocationInformation,
        _extension_additions_list_spec_for_SGSNLocationInformation,
        _root_component_type_list_2_spec_for_SGSNLocationInformation,
        undefined,
    );
    return new SGSNLocationInformation(
        cGI,
        lAI,
        sAI,
        rAI,
        geographicalInformation,
        geodeticInformation,
        currentLocationRetrieved,
        ageOfLocationInformation,
        userCSGInformation
    );
}; }
    return _cached_decoder_for_SGSNLocationInformation(el);
}

let _cached_encoder_for_SGSNLocationInformation: $.ASN1Encoder<SGSNLocationInformation> | null = null;

/**
 * @summary Encodes a(n) SGSNLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNLocationInformation (value: SGSNLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNLocationInformation) { _cached_encoder_for_SGSNLocationInformation = function (value: SGSNLocationInformation, elGetter: $.ASN1Encoder<SGSNLocationInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CGI, $.BER)(value.cGI, $.BER)),
            /* IF_ABSENT  */ ((value.lAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LAI, $.BER)(value.lAI, $.BER)),
            /* IF_ABSENT  */ ((value.sAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SAI, $.BER)(value.sAI, $.BER)),
            /* IF_ABSENT  */ ((value.rAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RAI, $.BER)(value.rAI, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GeographicalInformationOctet, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GeodeticInformationOctet, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationRetrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.currentLocationRetrieved, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.ageOfLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.userCSGInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SGSNLocationInformation(value, elGetter);
}


/* eslint-enable */
