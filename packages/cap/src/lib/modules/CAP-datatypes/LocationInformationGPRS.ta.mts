import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-MS-DataTypes/RAIdentity.ta.mjs";
import { type GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
import { type ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { type LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MAP-MS-DataTypes/UserCSGInformation.ta.mjs";

/**
 * @summary LocationInformationGPRS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationInformationGPRS	::= SEQUENCE {
 cellGlobalIdOrServiceAreaIdOrLAI	[0] OCTET STRING (SIZE(5..7))		OPTIONAL,
 routeingAreaIdentity		[1] RAIdentity				OPTIONAL,
 geographicalInformation		[2] GeographicalInformation			OPTIONAL,
 sgsn-Number				[3] ISDN-AddressString			OPTIONAL,
 selectedLSAIdentity			[4] LSAIdentity				OPTIONAL,
 extensionContainer			[5] ExtensionContainer			OPTIONAL,
 ...,
 sai-Present				[6] NULL					OPTIONAL,
 userCSGInformation                  [7] UserCSGInformation                      OPTIONAL
}
 * ```
 *
 */
export class LocationInformationGPRS {
    constructor (
        readonly cellGlobalIdOrServiceAreaIdOrLAI: OPTIONAL<OCTET_STRING>,
        readonly routeingAreaIdentity: OPTIONAL<RAIdentity>,
        readonly geographicalInformation: OPTIONAL<GeographicalInformation>,
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
        readonly selectedLSAIdentity: OPTIONAL<LSAIdentity>,
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        readonly sai_Present: OPTIONAL<NULL>,
        readonly userCSGInformation: OPTIONAL<UserCSGInformation>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (LocationInformationGPRS)]: (LocationInformationGPRS)[_K] }): LocationInformationGPRS {
        return new LocationInformationGPRS(_o.cellGlobalIdOrServiceAreaIdOrLAI, _o.routeingAreaIdentity, _o.geographicalInformation, _o.sgsn_Number, _o.selectedLSAIdentity, _o.extensionContainer, _o.sai_Present, _o.userCSGInformation, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_LocationInformationGPRS: $.ComponentSpec[] = [
    new $.ComponentSpec("cellGlobalIdOrServiceAreaIdOrLAI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("routeingAreaIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("selectedLSAIdentity", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5))
];

export const _root_component_type_list_2_spec_for_LocationInformationGPRS: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_LocationInformationGPRS: $.ComponentSpec[] = [
    new $.ComponentSpec("sai-Present", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 7))
];

let _cached_decoder_for_LocationInformationGPRS: $.ASN1Decoder<LocationInformationGPRS> | null = null;
export function _decode_LocationInformationGPRS (el: _Element): LocationInformationGPRS {
    if (!_cached_decoder_for_LocationInformationGPRS) {
        _cached_decoder_for_LocationInformationGPRS = function (el: _Element): LocationInformationGPRS {
    let cellGlobalIdOrServiceAreaIdOrLAI: OPTIONAL<OCTET_STRING>;
    let routeingAreaIdentity: OPTIONAL<RAIdentity>;
    let geographicalInformation: OPTIONAL<GeographicalInformation>;
    let sgsn_Number: OPTIONAL<ISDN_AddressString>;
    let selectedLSAIdentity: OPTIONAL<LSAIdentity>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let sai_Present: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cellGlobalIdOrServiceAreaIdOrLAI": (_el: _Element): void => { cellGlobalIdOrServiceAreaIdOrLAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routeingAreaIdentity": (_el: _Element): void => { routeingAreaIdentity = $._decode_implicit<RAIdentity>(() => _decode_RAIdentity)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformation>(() => _decode_GeographicalInformation)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "selectedLSAIdentity": (_el: _Element): void => { selectedLSAIdentity = $._decode_implicit<LSAIdentity>(() => _decode_LSAIdentity)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "sai-Present": (_el: _Element): void => { sai_Present = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInformationGPRS,
        _extension_additions_list_spec_for_LocationInformationGPRS,
        _root_component_type_list_2_spec_for_LocationInformationGPRS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInformationGPRS(
        cellGlobalIdOrServiceAreaIdOrLAI,
        routeingAreaIdentity,
        geographicalInformation,
        sgsn_Number,
        selectedLSAIdentity,
        extensionContainer,
        sai_Present,
        userCSGInformation,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_LocationInformationGPRS(el);
}

let _cached_encoder_for_LocationInformationGPRS: $.ASN1Encoder<LocationInformationGPRS> | null = null;
export function _encode_LocationInformationGPRS (value: LocationInformationGPRS, elGetter: $.ASN1Encoder<LocationInformationGPRS>): _Element {
    if (!_cached_encoder_for_LocationInformationGPRS) {
        _cached_encoder_for_LocationInformationGPRS = function (value: LocationInformationGPRS, elGetter: $.ASN1Encoder<LocationInformationGPRS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cellGlobalIdOrServiceAreaIdOrLAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.cellGlobalIdOrServiceAreaIdOrLAI, $.BER)),
            /* IF_ABSENT  */ ((value.routeingAreaIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RAIdentity, $.BER)(value.routeingAreaIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GeographicalInformation, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER)),
            /* IF_ABSENT  */ ((value.selectedLSAIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LSAIdentity, $.BER)(value.selectedLSAIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.sai_Present === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.sai_Present, $.BER)),
            /* IF_ABSENT  */ ((value.userCSGInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_LocationInformationGPRS(value, elGetter);
}
