/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TetraLocation, _decode_TetraLocation, _encode_TetraLocation } from "../HI2Operations/TetraLocation.ta.mjs";
// export { TetraLocation, _decode_TetraLocation, _encode_TetraLocation } from "../HI2Operations/TetraLocation.ta.mjs";
import { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
import { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";


/**
 * @summary Location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location ::= SEQUENCE
 * {
 *     e164-Number            [1] OCTET STRING (SIZE (1..25)) OPTIONAL,
 *         -- Coded in the same format as the ISUP location number (parameter field)
 *         -- of the ISUP (see EN 300 356 [5]).
 *     globalCellID        [2] OCTET STRING (SIZE (5..7)) OPTIONAL,
 *         -- See MAP format (see TS GSM 09.02 [32]).
 *     tetraLocation        [3] TetraLocation OPTIONAL,
 *         -- This optional parameter is not in use anymore, but is kept for backwards compatibility.
 *     rAI                    [4] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- The Routeing Area Identifier (RAI) in the current SGSN is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the Routing Area Identification IEI (only the
 *         -- last 6 octets are used).
 *     gsmLocation            [5] GSMLocation OPTIONAL,
 *     umtsLocation        [6] UMTSLocation OPTIONAL,
 *     sAI                    [7] OCTET STRING (SIZE (7)) OPTIONAL,
 *         -- format:    PLMN-ID    3 octets (no. 1-3),
 *         --             LAC        2 octets (no. 4-5),
 *         --             SAC        2 octets (no. 6-7)
 *         --             (according to 3GPP 25.413 [82]).
 *     ...,
 *     oldRAI                [8] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- the "Routeing Area Identifier" in the old SGSN is coded in accordance with
 *         -- 3GPP TS 24.008 [41] without the Routing Area Identification IEI
 *         -- (only the last 6 octets are used).
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     tAI                    [9] OCTET STRING (SIZE (6)) OPTIONAL,
 *         -- The "Tracking Area Identity" (TAI) is coded in accordance with 3GPP TS 29.118 [83] 
 *         -- without the TAI IEI.
 *         -- The tAI parameter is applicable only to the CS traffic cases where the available 
 *         -- location information is the one received from the Mobility Management Entity (MME).
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     eCGI                [10] OCTET STRING (SIZE (8)) OPTIONAL
 *         -- the "E-UTRAN Cell Global Identity" (E-CGI) is coded in accordance with 
 *         -- 3GPP TS 29.118 [83] without the E-CGI IEI.
 *         -- The eCGI parameter is applicable only to the CS traffic cases where 
 *         -- the available location information is the one received from the MME.
 *         -- This parameter is duplicated from 3GPP TS 33.108 [61].
 * }
 * ```
 * 
 * @class
 */
export
class Location {
    /**
     * @summary `e164_Number`.
     * @public
     * @readonly
     */
    readonly e164_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `globalCellID`.
     * @public
     * @readonly
     */
    readonly globalCellID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tetraLocation`.
     * @public
     * @readonly
     */
    readonly tetraLocation: OPTIONAL<TetraLocation>;
    /**
     * @summary `rAI`.
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `gsmLocation`.
     * @public
     * @readonly
     */
    readonly gsmLocation: OPTIONAL<GSMLocation>;
    /**
     * @summary `umtsLocation`.
     * @public
     * @readonly
     */
    readonly umtsLocation: OPTIONAL<UMTSLocation>;
    /**
     * @summary `sAI`.
     * @public
     * @readonly
     */
    readonly sAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `oldRAI`.
     * @public
     * @readonly
     */
    readonly oldRAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tAI`.
     * @public
     * @readonly
     */
    readonly tAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eCGI`.
     * @public
     * @readonly
     */
    readonly eCGI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        e164_Number: OPTIONAL<OCTET_STRING>,
        globalCellID: OPTIONAL<OCTET_STRING>,
        tetraLocation: OPTIONAL<TetraLocation>,
        rAI: OPTIONAL<OCTET_STRING>,
        gsmLocation: OPTIONAL<GSMLocation>,
        umtsLocation: OPTIONAL<UMTSLocation>,
        sAI: OPTIONAL<OCTET_STRING>,
        oldRAI: OPTIONAL<OCTET_STRING>,
        tAI: OPTIONAL<OCTET_STRING>,
        eCGI: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.e164_Number = e164_Number;
        this.globalCellID = globalCellID;
        this.tetraLocation = tetraLocation;
        this.rAI = rAI;
        this.gsmLocation = gsmLocation;
        this.umtsLocation = umtsLocation;
        this.sAI = sAI;
        this.oldRAI = oldRAI;
        this.tAI = tAI;
        this.eCGI = eCGI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Location
     * @description
     * 
     * This takes an `object` and converts it to a `Location`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Location`.
     * @returns {Location}
     */
    public static _from_object (_o: { [_K in keyof (Location)]: (Location)[_K] }): Location {
        return new Location(_o.e164_Number, _o.globalCellID, _o.tetraLocation, _o.rAI, _o.gsmLocation, _o.umtsLocation, _o.sAI, _o.oldRAI, _o.tAI, _o.eCGI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Location: $.ComponentSpec[] = [
    new $.ComponentSpec("e164-Number", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("globalCellID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tetraLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gsmLocation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("umtsLocation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sAI", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Location: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Location: $.ComponentSpec[] = [
    new $.ComponentSpec("oldRAI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("tAI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eCGI", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_Location: $.ASN1Decoder<Location> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Location
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Location (el: _Element): Location {
    if (!_cached_decoder_for_Location) { _cached_decoder_for_Location = function (el: _Element): Location {
    let e164_Number: OPTIONAL<OCTET_STRING>;
    let globalCellID: OPTIONAL<OCTET_STRING>;
    let tetraLocation: OPTIONAL<TetraLocation>;
    let rAI: OPTIONAL<OCTET_STRING>;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let sAI: OPTIONAL<OCTET_STRING>;
    let oldRAI: OPTIONAL<OCTET_STRING>;
    let tAI: OPTIONAL<OCTET_STRING>;
    let eCGI: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "e164-Number": (_el: _Element): void => { e164_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "globalCellID": (_el: _Element): void => { globalCellID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tetraLocation": (_el: _Element): void => { tetraLocation = $._decode_explicit<TetraLocation>(() => _decode_TetraLocation)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "sAI": (_el: _Element): void => { sAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "oldRAI": (_el: _Element): void => { oldRAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Location,
        _extension_additions_list_spec_for_Location,
        _root_component_type_list_2_spec_for_Location,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Location(
        e164_Number,
        globalCellID,
        tetraLocation,
        rAI,
        gsmLocation,
        umtsLocation,
        sAI,
        oldRAI,
        tAI,
        eCGI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Location(el);
}

let _cached_encoder_for_Location: $.ASN1Encoder<Location> | null = null;

/**
 * @summary Encodes a(n) Location into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Location, encoded as an ASN.1 Element.
 */
export
function _encode_Location (value: Location, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Location) { _cached_encoder_for_Location = function (value: Location, elGetter: $.ASN1Encoder<Location>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.e164_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.e164_Number, $.BER);
    }
    if (value.globalCellID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.globalCellID, $.BER);
    }
    if (value.tetraLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_TetraLocation, $.BER)(value.tetraLocation, $.BER);
    }
    if (value.rAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.rAI, $.BER);
    }
    if (value.gsmLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER);
    }
    if (value.umtsLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER);
    }
    if (value.sAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.sAI, $.BER);
    }
    if (value.oldRAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.oldRAI, $.BER);
    }
    if (value.tAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.tAI, $.BER);
    }
    if (value.eCGI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eCGI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Location(value, elGetter);
}


/* eslint-enable */
