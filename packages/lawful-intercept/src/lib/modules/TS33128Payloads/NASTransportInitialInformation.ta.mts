/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { CellCAGList, _decode_CellCAGList, _encode_CellCAGList } from "../TS33128Payloads/CellCAGList.ta.mjs";
// export { CellCAGList, _decode_CellCAGList, _encode_CellCAGList } from "../TS33128Payloads/CellCAGList.ta.mjs";
import { REDCAPIndication, _decode_REDCAPIndication, _encode_REDCAPIndication, _enum_for_REDCAPIndication } from "../TS33128Payloads/REDCAPIndication.ta.mjs";
// export { REDCAPIndication, _enum_for_REDCAPIndication, REDCAPIndication_redCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, redCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_REDCAPIndication, _encode_REDCAPIndication } from "../TS33128Payloads/REDCAPIndication.ta.mjs";


/**
 * @summary NASTransportInitialInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NASTransportInitialInformation ::= SEQUENCE
 * {
 *     rANUENGAPID             [1] RANUENGAPID,
 *     iABNodeIndication       [2] BOOLEAN OPTIONAL,
 *     eDTSession              [3] BOOLEAN OPTIONAL,
 *     authenticatedIndication [4] BOOLEAN OPTIONAL,
 *     nPNAccessInformation    [5] CellCAGList OPTIONAL,
 *     rEDCAPIndication        [6] REDCAPIndication OPTIONAL,
 *     mobileIABNodeIndication [7] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NASTransportInitialInformation {
    /**
     * @summary `rANUENGAPID`.
     * @description
     *
     * Identity that the AMF receives from the NG-RAN node uniquely identifying
     * the target UE within the NG-RAN Node. See TS 38.413 [23] clause 9.3.3.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly rANUENGAPID: RANUENGAPID;
    /**
     * @summary `iABNodeIndication`.
     * @description
     *
     * Indicates that the UE is capable of acting as an IAB Node. Shall be
     * present if present in the message that triggered the event or known at
     * the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly iABNodeIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `eDTSession`.
     * @description
     *
     * Indicates that the session is EDT capable. Shall be present if present in
     * the message that triggered the event or known at the NF where the POI is
     * located.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly eDTSession: OPTIONAL<BOOLEAN>;
    /**
     * @summary `authenticatedIndication`.
     * @description
     *
     * Indicates the Fixed Network Residential Gateway (FN-RG) has been
     * authenticated by the access network.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly authenticatedIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `nPNAccessInformation`.
     * @description
     *
     * Contains information to perform access control for Non-Public Network
     * (NPN).
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly nPNAccessInformation: OPTIONAL<CellCAGList>;
    /**
     * @summary `rEDCAPIndication`.
     * @description
     *
     * Indicates that the UE is a Reduced Capability (RedCap) UE.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly rEDCAPIndication: OPTIONAL<REDCAPIndication>;
    /**
     * @summary `mobileIABNodeIndication`.
     * @description
     *
     * Indicates that the UE is capable of acting as a mobile IAB Node. Shall be
     * present if present in the message that triggered the event or known at
     * the NF where the POI is located.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.14.
     *
     * @public
     * @readonly
     */
    readonly mobileIABNodeIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        rANUENGAPID: RANUENGAPID,
        iABNodeIndication?: OPTIONAL<BOOLEAN>,
        eDTSession?: OPTIONAL<BOOLEAN>,
        authenticatedIndication?: OPTIONAL<BOOLEAN>,
        nPNAccessInformation?: OPTIONAL<CellCAGList>,
        rEDCAPIndication?: OPTIONAL<REDCAPIndication>,
        mobileIABNodeIndication?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rANUENGAPID = rANUENGAPID;
        this.iABNodeIndication = iABNodeIndication;
        this.eDTSession = eDTSession;
        this.authenticatedIndication = authenticatedIndication;
        this.nPNAccessInformation = nPNAccessInformation;
        this.rEDCAPIndication = rEDCAPIndication;
        this.mobileIABNodeIndication = mobileIABNodeIndication;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NASTransportInitialInformation
     * @description
     * 
     * This takes an `object` and converts it to a `NASTransportInitialInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NASTransportInitialInformation`.
     * @returns {NASTransportInitialInformation}
     */
    public static _from_object (_o: { [_K in keyof (NASTransportInitialInformation)]: (NASTransportInitialInformation)[_K] }): NASTransportInitialInformation {
        return new NASTransportInitialInformation(_o.rANUENGAPID, _o.iABNodeIndication, _o.eDTSession, _o.authenticatedIndication, _o.nPNAccessInformation, _o.rEDCAPIndication, _o.mobileIABNodeIndication, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rEDCAPIndication`
         * @public
         * @static
         */

    public static _enum_for_rEDCAPIndication = _enum_for_REDCAPIndication;
}

/**
 * @summary The Leading Root Component Types of NASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NASTransportInitialInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iABNodeIndication", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eDTSession", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("authenticatedIndication", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nPNAccessInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rEDCAPIndication", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mobileIABNodeIndication", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of NASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NASTransportInitialInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NASTransportInitialInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NASTransportInitialInformation: $.ASN1Decoder<NASTransportInitialInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NASTransportInitialInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NASTransportInitialInformation (el: _Element): NASTransportInitialInformation {
    if (!_cached_decoder_for_NASTransportInitialInformation) { _cached_decoder_for_NASTransportInitialInformation = function (el: _Element): NASTransportInitialInformation {
    let rANUENGAPID!: RANUENGAPID;
    let iABNodeIndication: OPTIONAL<BOOLEAN>;
    let eDTSession: OPTIONAL<BOOLEAN>;
    let authenticatedIndication: OPTIONAL<BOOLEAN>;
    let nPNAccessInformation: OPTIONAL<CellCAGList>;
    let rEDCAPIndication: OPTIONAL<REDCAPIndication>;
    let mobileIABNodeIndication: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "iABNodeIndication": (_el: _Element): void => { iABNodeIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "eDTSession": (_el: _Element): void => { eDTSession = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "authenticatedIndication": (_el: _Element): void => { authenticatedIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "nPNAccessInformation": (_el: _Element): void => { nPNAccessInformation = $._decode_implicit<CellCAGList>(() => _decode_CellCAGList)(_el); },
        "rEDCAPIndication": (_el: _Element): void => { rEDCAPIndication = $._decode_implicit<REDCAPIndication>(() => _decode_REDCAPIndication)(_el); },
        "mobileIABNodeIndication": (_el: _Element): void => { mobileIABNodeIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NASTransportInitialInformation,
        _extension_additions_list_spec_for_NASTransportInitialInformation,
        _root_component_type_list_2_spec_for_NASTransportInitialInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NASTransportInitialInformation(
        rANUENGAPID,
        iABNodeIndication,
        eDTSession,
        authenticatedIndication,
        nPNAccessInformation,
        rEDCAPIndication,
        mobileIABNodeIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NASTransportInitialInformation(el);
}

let _cached_encoder_for_NASTransportInitialInformation: $.ASN1Encoder<NASTransportInitialInformation> | null = null;

/**
 * @summary Encodes a(n) NASTransportInitialInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NASTransportInitialInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NASTransportInitialInformation (value: NASTransportInitialInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NASTransportInitialInformation) { _cached_encoder_for_NASTransportInitialInformation = function (value: NASTransportInitialInformation, elGetter: $.ASN1Encoder<NASTransportInitialInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER);
    if (value.iABNodeIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.iABNodeIndication, $.BER);
    }
    if (value.eDTSession !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.eDTSession, $.BER);
    }
    if (value.authenticatedIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.authenticatedIndication, $.BER);
    }
    if (value.nPNAccessInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CellCAGList, $.BER)(value.nPNAccessInformation, $.BER);
    }
    if (value.rEDCAPIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_REDCAPIndication, $.BER)(value.rEDCAPIndication, $.BER);
    }
    if (value.mobileIABNodeIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.mobileIABNodeIndication, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NASTransportInitialInformation(value, elGetter);
}


/* eslint-enable */
