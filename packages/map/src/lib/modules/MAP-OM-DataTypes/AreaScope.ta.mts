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
import { CGI_List, _decode_CGI_List, _encode_CGI_List } from "../MAP-OM-DataTypes/CGI-List.ta.mjs";
import { E_UTRAN_CGI_List, _decode_E_UTRAN_CGI_List, _encode_E_UTRAN_CGI_List } from "../MAP-OM-DataTypes/E-UTRAN-CGI-List.ta.mjs";
import { RoutingAreaId_List, _decode_RoutingAreaId_List, _encode_RoutingAreaId_List } from "../MAP-OM-DataTypes/RoutingAreaId-List.ta.mjs";
import { LocationAreaId_List, _decode_LocationAreaId_List, _encode_LocationAreaId_List } from "../MAP-OM-DataTypes/LocationAreaId-List.ta.mjs";
import { TrackingAreaId_List, _decode_TrackingAreaId_List, _encode_TrackingAreaId_List } from "../MAP-OM-DataTypes/TrackingAreaId-List.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary AreaScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaScope ::= SEQUENCE {
 *     cgi-List    [0] CGI-List    OPTIONAL,
 *     e-utran-cgi-List    [1] E-UTRAN-CGI-List    OPTIONAL,
 *     routingAreaId-List    [2] RoutingAreaId-List    OPTIONAL,
 *     locationAreaId-List    [3] LocationAreaId-List    OPTIONAL,
 *     trackingAreaId-List    [4] TrackingAreaId-List    OPTIONAL,
 *     extensionContainer    [5] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class AreaScope {
    constructor (
        /**
         * @summary `cgi_List`.
         * @public
         * @readonly
         */
        readonly cgi_List: OPTIONAL<CGI_List>,
        /**
         * @summary `e_utran_cgi_List`.
         * @public
         * @readonly
         */
        readonly e_utran_cgi_List: OPTIONAL<E_UTRAN_CGI_List>,
        /**
         * @summary `routingAreaId_List`.
         * @public
         * @readonly
         */
        readonly routingAreaId_List: OPTIONAL<RoutingAreaId_List>,
        /**
         * @summary `locationAreaId_List`.
         * @public
         * @readonly
         */
        readonly locationAreaId_List: OPTIONAL<LocationAreaId_List>,
        /**
         * @summary `trackingAreaId_List`.
         * @public
         * @readonly
         */
        readonly trackingAreaId_List: OPTIONAL<TrackingAreaId_List>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AreaScope
     * @description
     * 
     * This takes an `object` and converts it to a `AreaScope`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaScope`.
     * @returns {AreaScope}
     */
    public static _from_object (_o: { [_K in keyof (AreaScope)]: (AreaScope)[_K] }): AreaScope {
        return new AreaScope(_o.cgi_List, _o.e_utran_cgi_List, _o.routingAreaId_List, _o.locationAreaId_List, _o.trackingAreaId_List, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AreaScope
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AreaScope: $.ComponentSpec[] = [
    new $.ComponentSpec("cgi-List", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("e-utran-cgi-List", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("routingAreaId-List", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("locationAreaId-List", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("trackingAreaId-List", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of AreaScope
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AreaScope: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AreaScope
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AreaScope: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AreaScope: $.ASN1Decoder<AreaScope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaScope
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaScope (el: _Element): AreaScope {
    if (!_cached_decoder_for_AreaScope) { _cached_decoder_for_AreaScope = function (el: _Element): AreaScope {
    let cgi_List: OPTIONAL<CGI_List> = undefined;
    let e_utran_cgi_List: OPTIONAL<E_UTRAN_CGI_List> = undefined;
    let routingAreaId_List: OPTIONAL<RoutingAreaId_List> = undefined;
    let locationAreaId_List: OPTIONAL<LocationAreaId_List> = undefined;
    let trackingAreaId_List: OPTIONAL<TrackingAreaId_List> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cgi-List": (_el: _Element): void => { cgi_List = $._decode_implicit<CGI_List>(() => _decode_CGI_List)(_el); },
        "e-utran-cgi-List": (_el: _Element): void => { e_utran_cgi_List = $._decode_implicit<E_UTRAN_CGI_List>(() => _decode_E_UTRAN_CGI_List)(_el); },
        "routingAreaId-List": (_el: _Element): void => { routingAreaId_List = $._decode_implicit<RoutingAreaId_List>(() => _decode_RoutingAreaId_List)(_el); },
        "locationAreaId-List": (_el: _Element): void => { locationAreaId_List = $._decode_implicit<LocationAreaId_List>(() => _decode_LocationAreaId_List)(_el); },
        "trackingAreaId-List": (_el: _Element): void => { trackingAreaId_List = $._decode_implicit<TrackingAreaId_List>(() => _decode_TrackingAreaId_List)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AreaScope,
        _extension_additions_list_spec_for_AreaScope,
        _root_component_type_list_2_spec_for_AreaScope,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AreaScope(
        cgi_List,
        e_utran_cgi_List,
        routingAreaId_List,
        locationAreaId_List,
        trackingAreaId_List,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AreaScope(el);
}

let _cached_encoder_for_AreaScope: $.ASN1Encoder<AreaScope> | null = null;

/**
 * @summary Encodes a(n) AreaScope into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaScope, encoded as an ASN.1 Element.
 */
export
function _encode_AreaScope (value: AreaScope, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaScope) { _cached_encoder_for_AreaScope = function (value: AreaScope, elGetter: $.ASN1Encoder<AreaScope>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cgi_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CGI_List, $.BER)(value.cgi_List, $.BER)),
            /* IF_ABSENT  */ ((value.e_utran_cgi_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_E_UTRAN_CGI_List, $.BER)(value.e_utran_cgi_List, $.BER)),
            /* IF_ABSENT  */ ((value.routingAreaId_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RoutingAreaId_List, $.BER)(value.routingAreaId_List, $.BER)),
            /* IF_ABSENT  */ ((value.locationAreaId_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationAreaId_List, $.BER)(value.locationAreaId_List, $.BER)),
            /* IF_ABSENT  */ ((value.trackingAreaId_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TrackingAreaId_List, $.BER)(value.trackingAreaId_List, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AreaScope(value, elGetter);
}


/* eslint-enable */
