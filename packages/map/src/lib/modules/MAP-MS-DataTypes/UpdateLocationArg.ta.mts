/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { VLR_Capability, _decode_VLR_Capability, _encode_VLR_Capability } from "../MAP-MS-DataTypes/VLR-Capability.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { ADD_Info, _decode_ADD_Info, _encode_ADD_Info } from "../MAP-MS-DataTypes/ADD-Info.ta.mjs";
import { PagingArea, _decode_PagingArea, _encode_PagingArea } from "../MAP-MS-DataTypes/PagingArea.ta.mjs";
import { EPLMN_List, _decode_EPLMN_List, _encode_EPLMN_List } from "../MAP-MS-DataTypes/EPLMN-List.ta.mjs";
import { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";


/**
 * @summary UpdateLocationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateLocationArg ::= SEQUENCE {
 *     imsi    IMSI,
 *     msc-Number    [1] ISDN-AddressString,
 *     vlr-Number    ISDN-AddressString,
 *     lmsi    [10] LMSI    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     vlr-Capability    [6] VLR-Capability    OPTIONAL,
 *     informPreviousNetworkEntity    [11]    NULL    OPTIONAL,
 *     cs-LCS-NotSupportedByUE    [12]    NULL    OPTIONAL,
 *     v-gmlc-Address    [2]    GSN-Address    OPTIONAL,
 *     add-info    [13] ADD-Info    OPTIONAL,
 *     pagingArea    [14] PagingArea    OPTIONAL,
 *     skipSubscriberDataUpdate    [15] NULL    OPTIONAL, 
 *     -- The skipSubscriberDataUpdate parameter in the UpdateLocationArg and the ADD-Info
 *     -- structures carry the same semantic.
 *     restorationIndicator    [16]    NULL    OPTIONAL,
 *     eplmn-List    [3] EPLMN-List    OPTIONAL,
 *     mme-DiameterAddress    [4] NetworkNodeDiameterAddress    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateLocationArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `msc_Number`.
         * @public
         * @readonly
         */
        readonly msc_Number: ISDN_AddressString,
        /**
         * @summary `vlr_Number`.
         * @public
         * @readonly
         */
        readonly vlr_Number: ISDN_AddressString,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `vlr_Capability`.
         * @public
         * @readonly
         */
        readonly vlr_Capability: OPTIONAL<VLR_Capability>,
        /**
         * @summary `informPreviousNetworkEntity`.
         * @public
         * @readonly
         */
        readonly informPreviousNetworkEntity: OPTIONAL<NULL>,
        /**
         * @summary `cs_LCS_NotSupportedByUE`.
         * @public
         * @readonly
         */
        readonly cs_LCS_NotSupportedByUE: OPTIONAL<NULL>,
        /**
         * @summary `v_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly v_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `add_info`.
         * @public
         * @readonly
         */
        readonly add_info: OPTIONAL<ADD_Info>,
        /**
         * @summary `pagingArea`.
         * @public
         * @readonly
         */
        readonly pagingArea: OPTIONAL<PagingArea>,
        /**
         * @summary `skipSubscriberDataUpdate`.
         * @public
         * @readonly
         */
        readonly skipSubscriberDataUpdate: OPTIONAL<NULL>,
        /**
         * @summary `restorationIndicator`.
         * @public
         * @readonly
         */
        readonly restorationIndicator: OPTIONAL<NULL>,
        /**
         * @summary `eplmn_List`.
         * @public
         * @readonly
         */
        readonly eplmn_List: OPTIONAL<EPLMN_List>,
        /**
         * @summary `mme_DiameterAddress`.
         * @public
         * @readonly
         */
        readonly mme_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateLocationArg
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateLocationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateLocationArg`.
     * @returns {UpdateLocationArg}
     */
    public static _from_object (_o: { [_K in keyof (UpdateLocationArg)]: (UpdateLocationArg)[_K] }): UpdateLocationArg {
        return new UpdateLocationArg(_o.imsi, _o.msc_Number, _o.vlr_Number, _o.lmsi, _o.extensionContainer, _o.vlr_Capability, _o.informPreviousNetworkEntity, _o.cs_LCS_NotSupportedByUE, _o.v_gmlc_Address, _o.add_info, _o.pagingArea, _o.skipSubscriberDataUpdate, _o.restorationIndicator, _o.eplmn_List, _o.mme_DiameterAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UpdateLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msc-Number", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("vlr-Number", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of UpdateLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateLocationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("vlr-Capability", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("informPreviousNetworkEntity", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cs-LCS-NotSupportedByUE", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("v-gmlc-Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("add-info", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("pagingArea", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("skipSubscriberDataUpdate", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("restorationIndicator", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("eplmn-List", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mme-DiameterAddress", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_UpdateLocationArg: $.ASN1Decoder<UpdateLocationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateLocationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateLocationArg (el: _Element): UpdateLocationArg {
    if (!_cached_decoder_for_UpdateLocationArg) { _cached_decoder_for_UpdateLocationArg = function (el: _Element): UpdateLocationArg {
    let imsi!: IMSI;
    let msc_Number!: ISDN_AddressString;
    let vlr_Number!: ISDN_AddressString;
    let lmsi: OPTIONAL<LMSI> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let vlr_Capability: OPTIONAL<VLR_Capability> = undefined;
    let informPreviousNetworkEntity: OPTIONAL<NULL> = undefined;
    let cs_LCS_NotSupportedByUE: OPTIONAL<NULL> = undefined;
    let v_gmlc_Address: OPTIONAL<GSN_Address> = undefined;
    let add_info: OPTIONAL<ADD_Info> = undefined;
    let pagingArea: OPTIONAL<PagingArea> = undefined;
    let skipSubscriberDataUpdate: OPTIONAL<NULL> = undefined;
    let restorationIndicator: OPTIONAL<NULL> = undefined;
    let eplmn_List: OPTIONAL<EPLMN_List> = undefined;
    let mme_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "msc-Number": (_el: _Element): void => { msc_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "vlr-Number": (_el: _Element): void => { vlr_Number = _decode_ISDN_AddressString(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "vlr-Capability": (_el: _Element): void => { vlr_Capability = $._decode_implicit<VLR_Capability>(() => _decode_VLR_Capability)(_el); },
        "informPreviousNetworkEntity": (_el: _Element): void => { informPreviousNetworkEntity = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "cs-LCS-NotSupportedByUE": (_el: _Element): void => { cs_LCS_NotSupportedByUE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "v-gmlc-Address": (_el: _Element): void => { v_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "add-info": (_el: _Element): void => { add_info = $._decode_implicit<ADD_Info>(() => _decode_ADD_Info)(_el); },
        "pagingArea": (_el: _Element): void => { pagingArea = $._decode_implicit<PagingArea>(() => _decode_PagingArea)(_el); },
        "skipSubscriberDataUpdate": (_el: _Element): void => { skipSubscriberDataUpdate = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "restorationIndicator": (_el: _Element): void => { restorationIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "eplmn-List": (_el: _Element): void => { eplmn_List = $._decode_implicit<EPLMN_List>(() => _decode_EPLMN_List)(_el); },
        "mme-DiameterAddress": (_el: _Element): void => { mme_DiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateLocationArg,
        _extension_additions_list_spec_for_UpdateLocationArg,
        _root_component_type_list_2_spec_for_UpdateLocationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateLocationArg(
        imsi,
        msc_Number,
        vlr_Number,
        lmsi,
        extensionContainer,
        vlr_Capability,
        informPreviousNetworkEntity,
        cs_LCS_NotSupportedByUE,
        v_gmlc_Address,
        add_info,
        pagingArea,
        skipSubscriberDataUpdate,
        restorationIndicator,
        eplmn_List,
        mme_DiameterAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UpdateLocationArg(el);
}

let _cached_encoder_for_UpdateLocationArg: $.ASN1Encoder<UpdateLocationArg> | null = null;

/**
 * @summary Encodes a(n) UpdateLocationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateLocationArg, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateLocationArg (value: UpdateLocationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateLocationArg) { _cached_encoder_for_UpdateLocationArg = function (value: UpdateLocationArg, elGetter: $.ASN1Encoder<UpdateLocationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.msc_Number, $.BER),
            /* REQUIRED   */ _encode_ISDN_AddressString(value.vlr_Number, $.BER),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.vlr_Capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VLR_Capability, $.BER)(value.vlr_Capability, $.BER)),
            /* IF_ABSENT  */ ((value.informPreviousNetworkEntity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.informPreviousNetworkEntity, $.BER)),
            /* IF_ABSENT  */ ((value.cs_LCS_NotSupportedByUE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.cs_LCS_NotSupportedByUE, $.BER)),
            /* IF_ABSENT  */ ((value.v_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GSN_Address, $.BER)(value.v_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.add_info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_ADD_Info, $.BER)(value.add_info, $.BER)),
            /* IF_ABSENT  */ ((value.pagingArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_PagingArea, $.BER)(value.pagingArea, $.BER)),
            /* IF_ABSENT  */ ((value.skipSubscriberDataUpdate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.skipSubscriberDataUpdate, $.BER)),
            /* IF_ABSENT  */ ((value.restorationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.restorationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.eplmn_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EPLMN_List, $.BER)(value.eplmn_List, $.BER)),
            /* IF_ABSENT  */ ((value.mme_DiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.mme_DiameterAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateLocationArg(value, elGetter);
}


/* eslint-enable */
