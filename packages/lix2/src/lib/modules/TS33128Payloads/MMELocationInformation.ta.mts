/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
import { GeographicalInformationOctet, _decode_GeographicalInformationOctet, _encode_GeographicalInformationOctet } from "../TS33128Payloads/GeographicalInformationOctet.ta.mjs";
// export { GeographicalInformationOctet, _decode_GeographicalInformationOctet, _encode_GeographicalInformationOctet } from "../TS33128Payloads/GeographicalInformationOctet.ta.mjs";
import { GeodeticInformationOctet, _decode_GeodeticInformationOctet, _encode_GeodeticInformationOctet } from "../TS33128Payloads/GeodeticInformationOctet.ta.mjs";
// export { GeodeticInformationOctet, _decode_GeodeticInformationOctet, _encode_GeodeticInformationOctet } from "../TS33128Payloads/GeodeticInformationOctet.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../TS33128Payloads/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../TS33128Payloads/UserCSGInformation.ta.mjs";
import { ENbID, _decode_ENbID, _encode_ENbID } from "../TS33128Payloads/ENbID.ta.mjs";
// export { ENbID, _decode_ENbID, _encode_ENbID } from "../TS33128Payloads/ENbID.ta.mjs";
import { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";
// export { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";


/**
 * @summary MMELocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMELocationInformation ::= SEQUENCE
 * {
 *     eCGI                     [1] ECGI OPTIONAL,
 *     tAI                      [2] TAI OPTIONAL,
 *     geographicalInformation  [3] GeographicalInformationOctet OPTIONAL,
 *     geodeticInformation      [4] GeodeticInformationOctet OPTIONAL,
 *     currentLocationRetrieved [5] BOOLEAN OPTIONAL,
 *     ageOfLocationInformation [6] INTEGER OPTIONAL,
 *     userCSGInformation       [7] UserCSGInformation OPTIONAL,
 *     eNbID                    [8] ENbID OPTIONAL,
 *     additionalCellIDs        [9] SEQUENCE OF CellInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMELocationInformation {
    constructor (
        /**
         * @summary `eCGI`.
         * @public
         * @readonly
         */
        readonly eCGI: OPTIONAL<ECGI>,
        /**
         * @summary `tAI`.
         * @public
         * @readonly
         */
        readonly tAI: OPTIONAL<TAI>,
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
        readonly userCSGInformation: OPTIONAL<UserCSGInformation>,
        /**
         * @summary `eNbID`.
         * @public
         * @readonly
         */
        readonly eNbID: OPTIONAL<ENbID>,
        /**
         * @summary `additionalCellIDs`.
         * @public
         * @readonly
         */
        readonly additionalCellIDs: OPTIONAL<CellInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a MMELocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `MMELocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMELocationInformation`.
     * @returns {MMELocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (MMELocationInformation)]: (MMELocationInformation)[_K] }): MMELocationInformation {
        return new MMELocationInformation(_o.eCGI, _o.tAI, _o.geographicalInformation, _o.geodeticInformation, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.userCSGInformation, _o.eNbID, _o.additionalCellIDs);
    }


}

/**
 * @summary The Leading Root Component Types of MMELocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMELocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("eCGI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eNbID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("additionalCellIDs", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MMELocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMELocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMELocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMELocationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMELocationInformation: $.ASN1Decoder<MMELocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMELocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMELocationInformation (el: _Element): MMELocationInformation {
    if (!_cached_decoder_for_MMELocationInformation) { _cached_decoder_for_MMELocationInformation = function (el: _Element): MMELocationInformation {
    let eCGI: OPTIONAL<ECGI>;
    let tAI: OPTIONAL<TAI>;
    let geographicalInformation: OPTIONAL<GeographicalInformationOctet>;
    let geodeticInformation: OPTIONAL<GeodeticInformationOctet>;
    let currentLocationRetrieved: OPTIONAL<BOOLEAN>;
    let ageOfLocationInformation: OPTIONAL<INTEGER>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let eNbID: OPTIONAL<ENbID>;
    let additionalCellIDs: OPTIONAL<CellInformation[]>;
    const callbacks: $.DecodingMap = {
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(_el); },
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformationOctet>(() => _decode_GeographicalInformationOctet)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<GeodeticInformationOctet>(() => _decode_GeodeticInformationOctet)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "eNbID": (_el: _Element): void => { eNbID = $._decode_explicit<ENbID>(() => _decode_ENbID)(_el); },
        "additionalCellIDs": (_el: _Element): void => { additionalCellIDs = $._decode_implicit<CellInformation[]>(() => $._decodeSequenceOf<CellInformation>(() => _decode_CellInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMELocationInformation,
        _extension_additions_list_spec_for_MMELocationInformation,
        _root_component_type_list_2_spec_for_MMELocationInformation,
        undefined,
    );
    return new MMELocationInformation(
        eCGI,
        tAI,
        geographicalInformation,
        geodeticInformation,
        currentLocationRetrieved,
        ageOfLocationInformation,
        userCSGInformation,
        eNbID,
        additionalCellIDs
    );
}; }
    return _cached_decoder_for_MMELocationInformation(el);
}

let _cached_encoder_for_MMELocationInformation: $.ASN1Encoder<MMELocationInformation> | null = null;

/**
 * @summary Encodes a(n) MMELocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMELocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_MMELocationInformation (value: MMELocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMELocationInformation) { _cached_encoder_for_MMELocationInformation = function (value: MMELocationInformation, elGetter: $.ASN1Encoder<MMELocationInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eCGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ECGI, $.BER)(value.eCGI, $.BER)),
            /* IF_ABSENT  */ ((value.tAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TAI, $.BER)(value.tAI, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GeographicalInformationOctet, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GeodeticInformationOctet, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationRetrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.currentLocationRetrieved, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.ageOfLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.userCSGInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER)),
            /* IF_ABSENT  */ ((value.eNbID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_ENbID, $.BER)(value.eNbID, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCellIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<CellInformation>(() => _encode_CellInformation, $.BER), $.BER)(value.additionalCellIDs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMELocationInformation(value, elGetter);
}


/* eslint-enable */
