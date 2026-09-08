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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Profiles, Profiles_basicTelephonyProfile /* IMPORTED_LONG_NAMED_BIT */, basicTelephonyProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_routeingProfile /* IMPORTED_LONG_NAMED_BIT */, routeingProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_level1aVoiceBrowserProfile /* IMPORTED_LONG_NAMED_BIT */, level1aVoiceBrowserProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_level1bVoiceBrowserProfile /* IMPORTED_LONG_NAMED_BIT */, level1bVoiceBrowserProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_level2VoiceBrowserProfile /* IMPORTED_LONG_NAMED_BIT */, level2VoiceBrowserProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_minimalUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, minimalUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_basicUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, basicUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_advancedUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, advancedUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_conferencingUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, conferencingUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_basicUaCSTADeviceFeatureProfile /* IMPORTED_LONG_NAMED_BIT */, basicUaCSTADeviceFeatureProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_advancedUaCSTADeviceFeatureProfile /* IMPORTED_LONG_NAMED_BIT */, advancedUaCSTADeviceFeatureProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_speakerUACSTADeviceFeatureProfile /* IMPORTED_LONG_NAMED_BIT */, speakerUACSTADeviceFeatureProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_basicSpeechServiceProfile /* IMPORTED_LONG_NAMED_BIT */, basicSpeechServiceProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_advancedSpeechServiceProfile /* IMPORTED_LONG_NAMED_BIT */, advancedSpeechServiceProfile /* IMPORTED_SHORT_NAMED_BIT */, _decode_Profiles, _encode_Profiles } from "../CSTA-get-switching-function-capabilities/Profiles.ta.mjs";
// export { Profiles, Profiles_basicTelephonyProfile /* IMPORTED_LONG_NAMED_BIT */, basicTelephonyProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_routeingProfile /* IMPORTED_LONG_NAMED_BIT */, routeingProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_level1aVoiceBrowserProfile /* IMPORTED_LONG_NAMED_BIT */, level1aVoiceBrowserProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_level1bVoiceBrowserProfile /* IMPORTED_LONG_NAMED_BIT */, level1bVoiceBrowserProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_level2VoiceBrowserProfile /* IMPORTED_LONG_NAMED_BIT */, level2VoiceBrowserProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_minimalUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, minimalUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_basicUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, basicUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_advancedUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, advancedUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_conferencingUaCSTACallControlProfile /* IMPORTED_LONG_NAMED_BIT */, conferencingUaCSTACallControlProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_basicUaCSTADeviceFeatureProfile /* IMPORTED_LONG_NAMED_BIT */, basicUaCSTADeviceFeatureProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_advancedUaCSTADeviceFeatureProfile /* IMPORTED_LONG_NAMED_BIT */, advancedUaCSTADeviceFeatureProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_speakerUACSTADeviceFeatureProfile /* IMPORTED_LONG_NAMED_BIT */, speakerUACSTADeviceFeatureProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_basicSpeechServiceProfile /* IMPORTED_LONG_NAMED_BIT */, basicSpeechServiceProfile /* IMPORTED_SHORT_NAMED_BIT */, Profiles_advancedSpeechServiceProfile /* IMPORTED_LONG_NAMED_BIT */, advancedSpeechServiceProfile /* IMPORTED_SHORT_NAMED_BIT */, _decode_Profiles, _encode_Profiles } from "../CSTA-get-switching-function-capabilities/Profiles.ta.mjs";
import { DeviceIDFormat, DeviceIDFormat_dialableDigitsAsterix /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsAsterix /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsHash /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsHash /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsABCD /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsABCD /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsExclamation /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsExclamation /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsP /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsP /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsT /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsT /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsComma /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsComma /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsW /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsW /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsAt /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsAt /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsDollar /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsDollar /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsSemicolon /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsSemicolon /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprExclamation /* IMPORTED_LONG_NAMED_BIT */, sFReprExclamation /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprEt /* IMPORTED_LONG_NAMED_BIT */, sFReprEt /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprSlash /* IMPORTED_LONG_NAMED_BIT */, sFReprSlash /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPercent /* IMPORTED_LONG_NAMED_BIT */, sFReprPercent /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprNM /* IMPORTED_LONG_NAMED_BIT */, sFReprNM /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprGeneric /* IMPORTED_LONG_NAMED_BIT */, sFReprGeneric /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprImplicitTON /* IMPORTED_LONG_NAMED_BIT */, sFReprImplicitTON /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONUnkown /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONUnkown /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONInternal /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONInternal /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONNational /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONNational /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONSubscriber /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONSubscriber /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONAbbreviated /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONAbbreviated /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONUnknown /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONUnknown /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLevel3 /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLevel3 /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLevel2 /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLevel2 /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLevel1 /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLevel1 /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLocal /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLocal /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONAbbreviated /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONAbbreviated /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprOther /* IMPORTED_LONG_NAMED_BIT */, sFReprOther /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFRResourceID /* IMPORTED_LONG_NAMED_BIT */, sFRResourceID /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_privateNumber /* IMPORTED_LONG_NAMED_BIT */, privateNumber /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_privateName /* IMPORTED_LONG_NAMED_BIT */, privateName /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_deviceNumber /* IMPORTED_LONG_NAMED_BIT */, deviceNumber /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeviceIDFormat, _encode_DeviceIDFormat } from "../CSTA-capability-exchange/DeviceIDFormat.ta.mjs";
// export { DeviceIDFormat, DeviceIDFormat_dialableDigitsAsterix /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsAsterix /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsHash /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsHash /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsABCD /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsABCD /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsExclamation /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsExclamation /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsP /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsP /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsT /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsT /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsComma /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsComma /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsW /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsW /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsAt /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsAt /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsDollar /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsDollar /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_dialableDigitsSemicolon /* IMPORTED_LONG_NAMED_BIT */, dialableDigitsSemicolon /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprExclamation /* IMPORTED_LONG_NAMED_BIT */, sFReprExclamation /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprEt /* IMPORTED_LONG_NAMED_BIT */, sFReprEt /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprSlash /* IMPORTED_LONG_NAMED_BIT */, sFReprSlash /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPercent /* IMPORTED_LONG_NAMED_BIT */, sFReprPercent /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprNM /* IMPORTED_LONG_NAMED_BIT */, sFReprNM /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprGeneric /* IMPORTED_LONG_NAMED_BIT */, sFReprGeneric /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprImplicitTON /* IMPORTED_LONG_NAMED_BIT */, sFReprImplicitTON /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONUnkown /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONUnkown /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONInternal /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONInternal /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONNational /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONNational /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONSubscriber /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONSubscriber /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPubTONAbbreviated /* IMPORTED_LONG_NAMED_BIT */, sFReprPubTONAbbreviated /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONUnknown /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONUnknown /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLevel3 /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLevel3 /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLevel2 /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLevel2 /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLevel1 /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLevel1 /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONLocal /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONLocal /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprPriTONAbbreviated /* IMPORTED_LONG_NAMED_BIT */, sFReprPriTONAbbreviated /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFReprOther /* IMPORTED_LONG_NAMED_BIT */, sFReprOther /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_sFRResourceID /* IMPORTED_LONG_NAMED_BIT */, sFRResourceID /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_privateNumber /* IMPORTED_LONG_NAMED_BIT */, privateNumber /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_privateName /* IMPORTED_LONG_NAMED_BIT */, privateName /* IMPORTED_SHORT_NAMED_BIT */, DeviceIDFormat_deviceNumber /* IMPORTED_LONG_NAMED_BIT */, deviceNumber /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeviceIDFormat, _encode_DeviceIDFormat } from "../CSTA-capability-exchange/DeviceIDFormat.ta.mjs";
import { SwDomainFeatures, SwDomainFeatures_isForwardingBefore /* IMPORTED_LONG_NAMED_BIT */, isForwardingBefore /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_isForwardingAfter /* IMPORTED_LONG_NAMED_BIT */, isForwardingAfter /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_swFunctionDefaultSettings /* IMPORTED_LONG_NAMED_BIT */, swFunctionDefaultSettings /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_userSpecific /* IMPORTED_LONG_NAMED_BIT */, userSpecific /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_userSpecificDefaultFowardingType /* IMPORTED_LONG_NAMED_BIT */, userSpecificDefaultFowardingType /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_userSpecificDefaultForwardDestination /* IMPORTED_LONG_NAMED_BIT */, userSpecificDefaultForwardDestination /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_negativeAcknowledgment /* IMPORTED_LONG_NAMED_BIT */, negativeAcknowledgment /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_supportFailedWithAssConn /* IMPORTED_LONG_NAMED_BIT */, supportFailedWithAssConn /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_supportFailedWithoutAssConn /* IMPORTED_LONG_NAMED_BIT */, supportFailedWithoutAssConn /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_supportFailedWithAssConnNotReportet /* IMPORTED_LONG_NAMED_BIT */, supportFailedWithAssConnNotReportet /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_recall /* IMPORTED_LONG_NAMED_BIT */, recall /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_callBack /* IMPORTED_LONG_NAMED_BIT */, callBack /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_extCallsIncoming /* IMPORTED_LONG_NAMED_BIT */, extCallsIncoming /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_extCallsOutgoing /* IMPORTED_LONG_NAMED_BIT */, extCallsOutgoing /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_prompting /* IMPORTED_LONG_NAMED_BIT */, prompting /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwDomainFeatures, _encode_SwDomainFeatures } from "../CSTA-capability-exchange/SwDomainFeatures.ta.mjs";
// export { SwDomainFeatures, SwDomainFeatures_isForwardingBefore /* IMPORTED_LONG_NAMED_BIT */, isForwardingBefore /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_isForwardingAfter /* IMPORTED_LONG_NAMED_BIT */, isForwardingAfter /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_swFunctionDefaultSettings /* IMPORTED_LONG_NAMED_BIT */, swFunctionDefaultSettings /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_userSpecific /* IMPORTED_LONG_NAMED_BIT */, userSpecific /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_userSpecificDefaultFowardingType /* IMPORTED_LONG_NAMED_BIT */, userSpecificDefaultFowardingType /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_userSpecificDefaultForwardDestination /* IMPORTED_LONG_NAMED_BIT */, userSpecificDefaultForwardDestination /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_negativeAcknowledgment /* IMPORTED_LONG_NAMED_BIT */, negativeAcknowledgment /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_supportFailedWithAssConn /* IMPORTED_LONG_NAMED_BIT */, supportFailedWithAssConn /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_supportFailedWithoutAssConn /* IMPORTED_LONG_NAMED_BIT */, supportFailedWithoutAssConn /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_supportFailedWithAssConnNotReportet /* IMPORTED_LONG_NAMED_BIT */, supportFailedWithAssConnNotReportet /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_recall /* IMPORTED_LONG_NAMED_BIT */, recall /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_callBack /* IMPORTED_LONG_NAMED_BIT */, callBack /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_extCallsIncoming /* IMPORTED_LONG_NAMED_BIT */, extCallsIncoming /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_extCallsOutgoing /* IMPORTED_LONG_NAMED_BIT */, extCallsOutgoing /* IMPORTED_SHORT_NAMED_BIT */, SwDomainFeatures_prompting /* IMPORTED_LONG_NAMED_BIT */, prompting /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwDomainFeatures, _encode_SwDomainFeatures } from "../CSTA-capability-exchange/SwDomainFeatures.ta.mjs";
import { SwAppearanceAddressability, SwAppearanceAddressability_nonAddressable /* IMPORTED_LONG_NAMED_BIT */, nonAddressable /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceAddressability_addressable /* IMPORTED_LONG_NAMED_BIT */, addressable /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwAppearanceAddressability, _encode_SwAppearanceAddressability } from "../CSTA-capability-exchange/SwAppearanceAddressability.ta.mjs";
// export { SwAppearanceAddressability, SwAppearanceAddressability_nonAddressable /* IMPORTED_LONG_NAMED_BIT */, nonAddressable /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceAddressability_addressable /* IMPORTED_LONG_NAMED_BIT */, addressable /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwAppearanceAddressability, _encode_SwAppearanceAddressability } from "../CSTA-capability-exchange/SwAppearanceAddressability.ta.mjs";
import { SwAppearanceTypes, SwAppearanceTypes_selectedStandard /* IMPORTED_LONG_NAMED_BIT */, selectedStandard /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_basicStandard /* IMPORTED_LONG_NAMED_BIT */, basicStandard /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_basicBridged /* IMPORTED_LONG_NAMED_BIT */, basicBridged /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_exclusiveBridged /* IMPORTED_LONG_NAMED_BIT */, exclusiveBridged /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_independentSharedBridged /* IMPORTED_LONG_NAMED_BIT */, independentSharedBridged /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_interDependentSharedBridged /* IMPORTED_LONG_NAMED_BIT */, interDependentSharedBridged /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwAppearanceTypes, _encode_SwAppearanceTypes } from "../CSTA-capability-exchange/SwAppearanceTypes.ta.mjs";
// export { SwAppearanceTypes, SwAppearanceTypes_selectedStandard /* IMPORTED_LONG_NAMED_BIT */, selectedStandard /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_basicStandard /* IMPORTED_LONG_NAMED_BIT */, basicStandard /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_basicBridged /* IMPORTED_LONG_NAMED_BIT */, basicBridged /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_exclusiveBridged /* IMPORTED_LONG_NAMED_BIT */, exclusiveBridged /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_independentSharedBridged /* IMPORTED_LONG_NAMED_BIT */, independentSharedBridged /* IMPORTED_SHORT_NAMED_BIT */, SwAppearanceTypes_interDependentSharedBridged /* IMPORTED_LONG_NAMED_BIT */, interDependentSharedBridged /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwAppearanceTypes, _encode_SwAppearanceTypes } from "../CSTA-capability-exchange/SwAppearanceTypes.ta.mjs";
import { IgnoreUnsupportedParameters, _enum_for_IgnoreUnsupportedParameters, IgnoreUnsupportedParameters_ignoreParameters /* IMPORTED_LONG_ENUMERATION_ITEM */, ignoreParameters /* IMPORTED_SHORT_ENUMERATION_ITEM */, IgnoreUnsupportedParameters_rejectMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, rejectMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IgnoreUnsupportedParameters, _encode_IgnoreUnsupportedParameters } from "../CSTA-capability-exchange/IgnoreUnsupportedParameters.ta.mjs";
// export { IgnoreUnsupportedParameters, _enum_for_IgnoreUnsupportedParameters, IgnoreUnsupportedParameters_ignoreParameters /* IMPORTED_LONG_ENUMERATION_ITEM */, ignoreParameters /* IMPORTED_SHORT_ENUMERATION_ITEM */, IgnoreUnsupportedParameters_rejectMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, rejectMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IgnoreUnsupportedParameters, _encode_IgnoreUnsupportedParameters } from "../CSTA-capability-exchange/IgnoreUnsupportedParameters.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { MonitorMediaClass, MonitorMediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_other /* IMPORTED_LONG_NAMED_BIT */, other /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MonitorMediaClass, _encode_MonitorMediaClass } from "../CSTA-status-reporting/MonitorMediaClass.ta.mjs";
// export { MonitorMediaClass, MonitorMediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_other /* IMPORTED_LONG_NAMED_BIT */, other /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MonitorMediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MonitorMediaClass, _encode_MonitorMediaClass } from "../CSTA-status-reporting/MonitorMediaClass.ta.mjs";
import { NumberOfChannels, _decode_NumberOfChannels, _encode_NumberOfChannels } from "../CSTA-data-call-types/NumberOfChannels.ta.mjs";
// export { NumberOfChannels, _decode_NumberOfChannels, _encode_NumberOfChannels } from "../CSTA-data-call-types/NumberOfChannels.ta.mjs";
import { MaxChannelBind, _decode_MaxChannelBind, _encode_MaxChannelBind } from "../CSTA-data-call-types/MaxChannelBind.ta.mjs";
// export { MaxChannelBind, _decode_MaxChannelBind, _encode_MaxChannelBind } from "../CSTA-data-call-types/MaxChannelBind.ta.mjs";
import { MiscMediaCallCharacteristics, MiscMediaCallCharacteristics_supportAdjustment /* IMPORTED_LONG_NAMED_BIT */, supportAdjustment /* IMPORTED_SHORT_NAMED_BIT */, _decode_MiscMediaCallCharacteristics, _encode_MiscMediaCallCharacteristics } from "../CSTA-get-switching-function-capabilities/MiscMediaCallCharacteristics.ta.mjs";
// export { MiscMediaCallCharacteristics, MiscMediaCallCharacteristics_supportAdjustment /* IMPORTED_LONG_NAMED_BIT */, supportAdjustment /* IMPORTED_SHORT_NAMED_BIT */, _decode_MiscMediaCallCharacteristics, _encode_MiscMediaCallCharacteristics } from "../CSTA-get-switching-function-capabilities/MiscMediaCallCharacteristics.ta.mjs";
import { ConnectionRateList, _decode_ConnectionRateList, _encode_ConnectionRateList } from "../CSTA-data-call-types/ConnectionRateList.ta.mjs";
// export { ConnectionRateList, _decode_ConnectionRateList, _encode_ConnectionRateList } from "../CSTA-data-call-types/ConnectionRateList.ta.mjs";
import { DelayToleranceList, _decode_DelayToleranceList, _encode_DelayToleranceList } from "../CSTA-data-call-types/DelayToleranceList.ta.mjs";
// export { DelayToleranceList, _decode_DelayToleranceList, _encode_DelayToleranceList } from "../CSTA-data-call-types/DelayToleranceList.ta.mjs";
import { PauseTime, _decode_PauseTime, _encode_PauseTime } from "../CSTA-capability-exchange/PauseTime.ta.mjs";
// export { PauseTime, _decode_PauseTime, _encode_PauseTime } from "../CSTA-capability-exchange/PauseTime.ta.mjs";
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
// export { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
import { MessageSeqNumbers, MessageSeqNumbers_allEvents /* IMPORTED_LONG_NAMED_BIT */, MessageSeqNumbers_allAcks /* IMPORTED_LONG_NAMED_BIT */, MessageSeqNumbers_allServReqs /* IMPORTED_LONG_NAMED_BIT */, _decode_MessageSeqNumbers, _encode_MessageSeqNumbers } from "../CSTA-get-switching-function-capabilities/MessageSeqNumbers.ta.mjs";
// export { MessageSeqNumbers, MessageSeqNumbers_allEvents /* IMPORTED_LONG_NAMED_BIT */, MessageSeqNumbers_allAcks /* IMPORTED_LONG_NAMED_BIT */, MessageSeqNumbers_allServReqs /* IMPORTED_LONG_NAMED_BIT */, _decode_MessageSeqNumbers, _encode_MessageSeqNumbers } from "../CSTA-get-switching-function-capabilities/MessageSeqNumbers.ta.mjs";
import { TimeStampMode, TimeStampMode_allEvents /* IMPORTED_LONG_NAMED_BIT */, TimeStampMode_allAcks /* IMPORTED_LONG_NAMED_BIT */, TimeStampMode_allServReqs /* IMPORTED_LONG_NAMED_BIT */, _decode_TimeStampMode, _encode_TimeStampMode } from "../CSTA-capability-exchange/TimeStampMode.ta.mjs";
// export { TimeStampMode, TimeStampMode_allEvents /* IMPORTED_LONG_NAMED_BIT */, TimeStampMode_allAcks /* IMPORTED_LONG_NAMED_BIT */, TimeStampMode_allServReqs /* IMPORTED_LONG_NAMED_BIT */, _decode_TimeStampMode, _encode_TimeStampMode } from "../CSTA-capability-exchange/TimeStampMode.ta.mjs";
import { SecurityMode, _enum_for_SecurityMode, SecurityMode_allEvents /* IMPORTED_LONG_ENUMERATION_ITEM */, SecurityMode_allAcks /* IMPORTED_LONG_ENUMERATION_ITEM */, SecurityMode_allServReqs /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SecurityMode, _encode_SecurityMode } from "../CSTA-get-switching-function-capabilities/SecurityMode.ta.mjs";
// export { SecurityMode, _enum_for_SecurityMode, SecurityMode_allEvents /* IMPORTED_LONG_ENUMERATION_ITEM */, SecurityMode_allAcks /* IMPORTED_LONG_ENUMERATION_ITEM */, SecurityMode_allServReqs /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SecurityMode, _encode_SecurityMode } from "../CSTA-get-switching-function-capabilities/SecurityMode.ta.mjs";
import { SecurityFormat, SecurityFormat_octetStringFromSF /* IMPORTED_LONG_NAMED_BIT */, octetStringFromSF /* IMPORTED_SHORT_NAMED_BIT */, SecurityFormat_otherTypeFromSF /* IMPORTED_LONG_NAMED_BIT */, otherTypeFromSF /* IMPORTED_SHORT_NAMED_BIT */, SecurityFormat_octetStringToSF /* IMPORTED_LONG_NAMED_BIT */, octetStringToSF /* IMPORTED_SHORT_NAMED_BIT */, SecurityFormat_otherTypeToSF /* IMPORTED_LONG_NAMED_BIT */, otherTypeToSF /* IMPORTED_SHORT_NAMED_BIT */, _decode_SecurityFormat, _encode_SecurityFormat } from "../CSTA-get-switching-function-capabilities/SecurityFormat.ta.mjs";
// export { SecurityFormat, SecurityFormat_octetStringFromSF /* IMPORTED_LONG_NAMED_BIT */, octetStringFromSF /* IMPORTED_SHORT_NAMED_BIT */, SecurityFormat_otherTypeFromSF /* IMPORTED_LONG_NAMED_BIT */, otherTypeFromSF /* IMPORTED_SHORT_NAMED_BIT */, SecurityFormat_octetStringToSF /* IMPORTED_LONG_NAMED_BIT */, octetStringToSF /* IMPORTED_SHORT_NAMED_BIT */, SecurityFormat_otherTypeToSF /* IMPORTED_LONG_NAMED_BIT */, otherTypeToSF /* IMPORTED_SHORT_NAMED_BIT */, _decode_SecurityFormat, _encode_SecurityFormat } from "../CSTA-get-switching-function-capabilities/SecurityFormat.ta.mjs";
import { TransAndConfSetup, TransAndConfSetup_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_holdCallMakeCall /* IMPORTED_LONG_NAMED_BIT */, holdCallMakeCall /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_alternateCall /* IMPORTED_LONG_NAMED_BIT */, alternateCall /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_twoCallsInHold /* IMPORTED_LONG_NAMED_BIT */, twoCallsInHold /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_twoCallsInConnected /* IMPORTED_LONG_NAMED_BIT */, twoCallsInConnected /* IMPORTED_SHORT_NAMED_BIT */, _decode_TransAndConfSetup, _encode_TransAndConfSetup } from "../CSTA-capability-exchange/TransAndConfSetup.ta.mjs";
// export { TransAndConfSetup, TransAndConfSetup_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_holdCallMakeCall /* IMPORTED_LONG_NAMED_BIT */, holdCallMakeCall /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_alternateCall /* IMPORTED_LONG_NAMED_BIT */, alternateCall /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_twoCallsInHold /* IMPORTED_LONG_NAMED_BIT */, twoCallsInHold /* IMPORTED_SHORT_NAMED_BIT */, TransAndConfSetup_twoCallsInConnected /* IMPORTED_LONG_NAMED_BIT */, twoCallsInConnected /* IMPORTED_SHORT_NAMED_BIT */, _decode_TransAndConfSetup, _encode_TransAndConfSetup } from "../CSTA-capability-exchange/TransAndConfSetup.ta.mjs";
import { MonitorFilterItems, _decode_MonitorFilterItems, _encode_MonitorFilterItems } from "../CSTA-get-switching-function-capabilities/MonitorFilterItems.ta.mjs";
// export { MonitorFilterItems, _decode_MonitorFilterItems, _encode_MonitorFilterItems } from "../CSTA-get-switching-function-capabilities/MonitorFilterItems.ta.mjs";
import { MiscMonitorCaps, MiscMonitorCaps_groupInclusivModel /* IMPORTED_LONG_NAMED_BIT */, groupInclusivModel /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_groupExclusiveModel /* IMPORTED_LONG_NAMED_BIT */, groupExclusiveModel /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_monitorPhysicalElement /* IMPORTED_LONG_NAMED_BIT */, monitorPhysicalElement /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_acdDeviceInclusiv /* IMPORTED_LONG_NAMED_BIT */, acdDeviceInclusiv /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_acdDeviceExclusiv /* IMPORTED_LONG_NAMED_BIT */, acdDeviceExclusiv /* IMPORTED_SHORT_NAMED_BIT */, _decode_MiscMonitorCaps, _encode_MiscMonitorCaps } from "../CSTA-capability-exchange/MiscMonitorCaps.ta.mjs";
// export { MiscMonitorCaps, MiscMonitorCaps_groupInclusivModel /* IMPORTED_LONG_NAMED_BIT */, groupInclusivModel /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_groupExclusiveModel /* IMPORTED_LONG_NAMED_BIT */, groupExclusiveModel /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_monitorPhysicalElement /* IMPORTED_LONG_NAMED_BIT */, monitorPhysicalElement /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_acdDeviceInclusiv /* IMPORTED_LONG_NAMED_BIT */, acdDeviceInclusiv /* IMPORTED_SHORT_NAMED_BIT */, MiscMonitorCaps_acdDeviceExclusiv /* IMPORTED_LONG_NAMED_BIT */, acdDeviceExclusiv /* IMPORTED_SHORT_NAMED_BIT */, _decode_MiscMonitorCaps, _encode_MiscMonitorCaps } from "../CSTA-capability-exchange/MiscMonitorCaps.ta.mjs";
import { DynamicFeatureSupported, _enum_for_DynamicFeatureSupported, DynamicFeatureSupported_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, DynamicFeatureSupported_all /* IMPORTED_LONG_ENUMERATION_ITEM */, all /* IMPORTED_SHORT_ENUMERATION_ITEM */, DynamicFeatureSupported_some /* IMPORTED_LONG_ENUMERATION_ITEM */, some /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DynamicFeatureSupported, _encode_DynamicFeatureSupported } from "../CSTA-get-switching-function-capabilities/DynamicFeatureSupported.ta.mjs";
// export { DynamicFeatureSupported, _enum_for_DynamicFeatureSupported, DynamicFeatureSupported_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, DynamicFeatureSupported_all /* IMPORTED_LONG_ENUMERATION_ITEM */, all /* IMPORTED_SHORT_ENUMERATION_ITEM */, DynamicFeatureSupported_some /* IMPORTED_LONG_ENUMERATION_ITEM */, some /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DynamicFeatureSupported, _encode_DynamicFeatureSupported } from "../CSTA-get-switching-function-capabilities/DynamicFeatureSupported.ta.mjs";
import { CallLinkageOptions, CallLinkageOptions_callLinkageFeatureSupported /* IMPORTED_LONG_NAMED_BIT */, callLinkageFeatureSupported /* IMPORTED_SHORT_NAMED_BIT */, CallLinkageOptions_threadLinkageFeatureSupported /* IMPORTED_LONG_NAMED_BIT */, threadLinkageFeatureSupported /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallLinkageOptions, _encode_CallLinkageOptions } from "../CSTA-get-switching-function-capabilities/CallLinkageOptions.ta.mjs";
// export { CallLinkageOptions, CallLinkageOptions_callLinkageFeatureSupported /* IMPORTED_LONG_NAMED_BIT */, callLinkageFeatureSupported /* IMPORTED_SHORT_NAMED_BIT */, CallLinkageOptions_threadLinkageFeatureSupported /* IMPORTED_LONG_NAMED_BIT */, threadLinkageFeatureSupported /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallLinkageOptions, _encode_CallLinkageOptions } from "../CSTA-get-switching-function-capabilities/CallLinkageOptions.ta.mjs";
import { ACDModels, ACDModels_visibleACDRelatedDevices /* IMPORTED_LONG_NAMED_BIT */, visibleACDRelatedDevices /* IMPORTED_SHORT_NAMED_BIT */, ACDModels_nonVisibleACDRelatedDevices /* IMPORTED_LONG_NAMED_BIT */, nonVisibleACDRelatedDevices /* IMPORTED_SHORT_NAMED_BIT */, _decode_ACDModels, _encode_ACDModels } from "../CSTA-capability-exchange/ACDModels.ta.mjs";
// export { ACDModels, ACDModels_visibleACDRelatedDevices /* IMPORTED_LONG_NAMED_BIT */, visibleACDRelatedDevices /* IMPORTED_SHORT_NAMED_BIT */, ACDModels_nonVisibleACDRelatedDevices /* IMPORTED_LONG_NAMED_BIT */, nonVisibleACDRelatedDevices /* IMPORTED_SHORT_NAMED_BIT */, _decode_ACDModels, _encode_ACDModels } from "../CSTA-capability-exchange/ACDModels.ta.mjs";
import { AgentLogOnModels, AgentLogOnModels_logOnACDDevice /* IMPORTED_LONG_NAMED_BIT */, logOnACDDevice /* IMPORTED_SHORT_NAMED_BIT */, AgentLogOnModels_logOnACDGroupExplOneStep /* IMPORTED_LONG_NAMED_BIT */, logOnACDGroupExplOneStep /* IMPORTED_SHORT_NAMED_BIT */, AgentLogOnModels_logOnACDGroupExplTwoSteps /* IMPORTED_LONG_NAMED_BIT */, logOnACDGroupExplTwoSteps /* IMPORTED_SHORT_NAMED_BIT */, AgentLogOnModels_logOnACDGroupImplOneStep /* IMPORTED_LONG_NAMED_BIT */, logOnACDGroupImplOneStep /* IMPORTED_SHORT_NAMED_BIT */, _decode_AgentLogOnModels, _encode_AgentLogOnModels } from "../CSTA-get-switching-function-capabilities/AgentLogOnModels.ta.mjs";
// export { AgentLogOnModels, AgentLogOnModels_logOnACDDevice /* IMPORTED_LONG_NAMED_BIT */, logOnACDDevice /* IMPORTED_SHORT_NAMED_BIT */, AgentLogOnModels_logOnACDGroupExplOneStep /* IMPORTED_LONG_NAMED_BIT */, logOnACDGroupExplOneStep /* IMPORTED_SHORT_NAMED_BIT */, AgentLogOnModels_logOnACDGroupExplTwoSteps /* IMPORTED_LONG_NAMED_BIT */, logOnACDGroupExplTwoSteps /* IMPORTED_SHORT_NAMED_BIT */, AgentLogOnModels_logOnACDGroupImplOneStep /* IMPORTED_LONG_NAMED_BIT */, logOnACDGroupImplOneStep /* IMPORTED_SHORT_NAMED_BIT */, _decode_AgentLogOnModels, _encode_AgentLogOnModels } from "../CSTA-get-switching-function-capabilities/AgentLogOnModels.ta.mjs";
import { AgentStateModels, AgentStateModels_multiState /* IMPORTED_LONG_NAMED_BIT */, multiState /* IMPORTED_SHORT_NAMED_BIT */, AgentStateModels_multiStateSemiIndependentLinked /* IMPORTED_LONG_NAMED_BIT */, multiStateSemiIndependentLinked /* IMPORTED_SHORT_NAMED_BIT */, AgentStateModels_agentOriented /* IMPORTED_LONG_NAMED_BIT */, agentOriented /* IMPORTED_SHORT_NAMED_BIT */, _decode_AgentStateModels, _encode_AgentStateModels } from "../CSTA-get-switching-function-capabilities/AgentStateModels.ta.mjs";
// export { AgentStateModels, AgentStateModels_multiState /* IMPORTED_LONG_NAMED_BIT */, multiState /* IMPORTED_SHORT_NAMED_BIT */, AgentStateModels_multiStateSemiIndependentLinked /* IMPORTED_LONG_NAMED_BIT */, multiStateSemiIndependentLinked /* IMPORTED_SHORT_NAMED_BIT */, AgentStateModels_agentOriented /* IMPORTED_LONG_NAMED_BIT */, agentOriented /* IMPORTED_SHORT_NAMED_BIT */, _decode_AgentStateModels, _encode_AgentStateModels } from "../CSTA-get-switching-function-capabilities/AgentStateModels.ta.mjs";
import { ConnectionView, _enum_for_ConnectionView, ConnectionView_fixed /* IMPORTED_LONG_ENUMERATION_ITEM */, fixed /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionView_local /* IMPORTED_LONG_ENUMERATION_ITEM */, local /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectionView, _encode_ConnectionView } from "../CSTA-get-switching-function-capabilities/ConnectionView.ta.mjs";
// export { ConnectionView, _enum_for_ConnectionView, ConnectionView_fixed /* IMPORTED_LONG_ENUMERATION_ITEM */, fixed /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectionView_local /* IMPORTED_LONG_ENUMERATION_ITEM */, local /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectionView, _encode_ConnectionView } from "../CSTA-get-switching-function-capabilities/ConnectionView.ta.mjs";
import { MaxLengthParameters, _decode_MaxLengthParameters, _encode_MaxLengthParameters } from "../CSTA-capability-exchange/MaxLengthParameters.ta.mjs";
// export { MaxLengthParameters, _decode_MaxLengthParameters, _encode_MaxLengthParameters } from "../CSTA-capability-exchange/MaxLengthParameters.ta.mjs";
import { MaxLengthParametersContinued, _decode_MaxLengthParametersContinued, _encode_MaxLengthParametersContinued } from "../CSTA-capability-exchange/MaxLengthParametersContinued.ta.mjs";
// export { MaxLengthParametersContinued, _decode_MaxLengthParametersContinued, _encode_MaxLengthParametersContinued } from "../CSTA-capability-exchange/MaxLengthParametersContinued.ta.mjs";
import { ServEvtsList, _decode_ServEvtsList, _encode_ServEvtsList } from "../CSTA-get-switching-function-capabilities/ServEvtsList.ta.mjs";
// export { ServEvtsList, _decode_ServEvtsList, _encode_ServEvtsList } from "../CSTA-get-switching-function-capabilities/ServEvtsList.ta.mjs";
import { PrivateDataVersionList, _decode_PrivateDataVersionList, _encode_PrivateDataVersionList } from "../CSTA-get-switching-function-capabilities/PrivateDataVersionList.ta.mjs";
// export { PrivateDataVersionList, _decode_PrivateDataVersionList, _encode_PrivateDataVersionList } from "../CSTA-get-switching-function-capabilities/PrivateDataVersionList.ta.mjs";
import { FilterThreshold, _decode_FilterThreshold, _encode_FilterThreshold } from "../CSTA-capability-exchange/FilterThreshold.ta.mjs";
// export { FilterThreshold, _decode_FilterThreshold, _encode_FilterThreshold } from "../CSTA-capability-exchange/FilterThreshold.ta.mjs";
import { MediaServiceCapsList, _decode_MediaServiceCapsList, _encode_MediaServiceCapsList } from "../CSTA-capability-exchange/MediaServiceCapsList.ta.mjs";
// export { MediaServiceCapsList, _decode_MediaServiceCapsList, _encode_MediaServiceCapsList } from "../CSTA-capability-exchange/MediaServiceCapsList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetSwitchingFunctionCapsResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionCapsResult ::= SEQUENCE
 * {     switchingSubDomainName             IA5String (SIZE(0..64)),
 *     manufacturerName             IA5String (SIZE(0..64)),
 *     profiles                 Profiles,
 *     deviceIDFormat                 DeviceIDFormat,
 *     swDomainFeatures             SwDomainFeatures,
 *     swAppearanceAddressability         SwAppearanceAddressability,
 *     swAppearanceTypes             SwAppearanceTypes,
 *     ignoreUnsupportedParameters         IgnoreUnsupportedParameters,
 *     callCharacteristicsSupported         [ 0] IMPLICIT     CallCharacteristics         OPTIONAL,
 *     mediaClassSupport             [ 1] IMPLICIT     MonitorMediaClass         OPTIONAL,
 *     numberOfChannels             [ 2] IMPLICIT     NumberOfChannels         OPTIONAL,
 *     maxChannelBind                 [ 3] IMPLICIT     MaxChannelBind             OPTIONAL,
 *     miscMediaCallCharacteristics         [ 4] IMPLICIT     MiscMediaCallCharacteristics     OPTIONAL,
 *     connectionRateList             [ 5] IMPLICIT     ConnectionRateList         OPTIONAL,
 *     delayToleranceList             [ 6] IMPLICIT     DelayToleranceList         OPTIONAL,
 *     pauseTime                 [ 7] IMPLICIT     PauseTime             OPTIONAL,
 *     currentTime                 [ 8] IMPLICIT     TimeInfo             OPTIONAL,
 *     messageSeqNumbers             [ 9] IMPLICIT     MessageSeqNumbers         OPTIONAL,
 *     timeStampMode                 [10] IMPLICIT     TimeStampMode             OPTIONAL,
 *     securityMode                 [11] IMPLICIT     SecurityMode             OPTIONAL,
 *     securityFormat                 [12] IMPLICIT     SecurityFormat            OPTIONAL,
 *     privateDataFormat             [13] IMPLICIT     SecurityFormat             OPTIONAL,
 *     transAndConfSetup             [14] IMPLICIT     TransAndConfSetup         OPTIONAL,
 *     monitorFilterItems             [15] IMPLICIT     MonitorFilterItems         OPTIONAL,
 *     miscMonitorCaps             [16] IMPLICIT     MiscMonitorCaps         OPTIONAL,
 *     correlatorDataSupported         [17] IMPLICIT     BOOLEAN             OPTIONAL,
 *     dynamicFeatureSupported         [18] IMPLICIT     DynamicFeatureSupported     OPTIONAL,
 *     callLinkageOptions             [28] IMPLICIT     CallLinkageOptions         OPTIONAL,
 *     aCDModels                 [19] IMPLICIT     ACDModels             OPTIONAL,
 *     agentLogOnModels             [20] IMPLICIT     AgentLogOnModels         OPTIONAL,
 *     agentStateModels             [21] IMPLICIT     AgentStateModels         OPTIONAL,
 *     connectionView                 ConnectionView,
 *     maxLengthParameters             MaxLengthParameters,
 *     maxLengthParametersContinued        [28] IMPLICIT     MaxLengthParametersContinued    OPTIONAL,
 *     servEvtsList                 [22] IMPLICIT     ServEvtsList             OPTIONAL,
 *     privateDataVersionList             [23] IMPLICIT     PrivateDataVersionList        OPTIONAL,
 *     systemStatusTimer             [24] IMPLICIT     INTEGER (0..180)         OPTIONAL,
 *     simpleThreshold             [25] IMPLICIT     INTEGER             OPTIONAL,
 *     filterThreshold             [26] IMPLICIT     FilterThreshold         OPTIONAL,
 *     mediaServiceCapsList             [27] IMPLICIT     MediaServiceCapsList         OPTIONAL,
 *     maxDeviceHistoryLength            [29] IMPLICIT     INTEGER                OPTIONAL,
 *     maxDestinationDevicesForDeflect        [30] IMPLICIT    INTEGER                OPTIONAL,
 *     extensions                 CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetSwitchingFunctionCapsResult {
    constructor (
        /**
         * @summary `switchingSubDomainName`.
         * @public
         * @readonly
         */
        readonly switchingSubDomainName: IA5String,
        /**
         * @summary `manufacturerName`.
         * @public
         * @readonly
         */
        readonly manufacturerName: IA5String,
        /**
         * @summary `profiles`.
         * @public
         * @readonly
         */
        readonly profiles: Profiles,
        /**
         * @summary `deviceIDFormat`.
         * @public
         * @readonly
         */
        readonly deviceIDFormat: DeviceIDFormat,
        /**
         * @summary `swDomainFeatures`.
         * @public
         * @readonly
         */
        readonly swDomainFeatures: SwDomainFeatures,
        /**
         * @summary `swAppearanceAddressability`.
         * @public
         * @readonly
         */
        readonly swAppearanceAddressability: SwAppearanceAddressability,
        /**
         * @summary `swAppearanceTypes`.
         * @public
         * @readonly
         */
        readonly swAppearanceTypes: SwAppearanceTypes,
        /**
         * @summary `ignoreUnsupportedParameters`.
         * @public
         * @readonly
         */
        readonly ignoreUnsupportedParameters: IgnoreUnsupportedParameters,
        /**
         * @summary `callCharacteristicsSupported`.
         * @public
         * @readonly
         */
        readonly callCharacteristicsSupported: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaClassSupport`.
         * @public
         * @readonly
         */
        readonly mediaClassSupport: OPTIONAL<MonitorMediaClass>,
        /**
         * @summary `numberOfChannels`.
         * @public
         * @readonly
         */
        readonly numberOfChannels: OPTIONAL<NumberOfChannels>,
        /**
         * @summary `maxChannelBind`.
         * @public
         * @readonly
         */
        readonly maxChannelBind: OPTIONAL<MaxChannelBind>,
        /**
         * @summary `miscMediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly miscMediaCallCharacteristics: OPTIONAL<MiscMediaCallCharacteristics>,
        /**
         * @summary `connectionRateList`.
         * @public
         * @readonly
         */
        readonly connectionRateList: OPTIONAL<ConnectionRateList>,
        /**
         * @summary `delayToleranceList`.
         * @public
         * @readonly
         */
        readonly delayToleranceList: OPTIONAL<DelayToleranceList>,
        /**
         * @summary `pauseTime`.
         * @public
         * @readonly
         */
        readonly pauseTime: OPTIONAL<PauseTime>,
        /**
         * @summary `currentTime`.
         * @public
         * @readonly
         */
        readonly currentTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `messageSeqNumbers`.
         * @public
         * @readonly
         */
        readonly messageSeqNumbers: OPTIONAL<MessageSeqNumbers>,
        /**
         * @summary `timeStampMode`.
         * @public
         * @readonly
         */
        readonly timeStampMode: OPTIONAL<TimeStampMode>,
        /**
         * @summary `securityMode`.
         * @public
         * @readonly
         */
        readonly securityMode: OPTIONAL<SecurityMode>,
        /**
         * @summary `securityFormat`.
         * @public
         * @readonly
         */
        readonly securityFormat: OPTIONAL<SecurityFormat>,
        /**
         * @summary `privateDataFormat`.
         * @public
         * @readonly
         */
        readonly privateDataFormat: OPTIONAL<SecurityFormat>,
        /**
         * @summary `transAndConfSetup`.
         * @public
         * @readonly
         */
        readonly transAndConfSetup: OPTIONAL<TransAndConfSetup>,
        /**
         * @summary `monitorFilterItems`.
         * @public
         * @readonly
         */
        readonly monitorFilterItems: OPTIONAL<MonitorFilterItems>,
        /**
         * @summary `miscMonitorCaps`.
         * @public
         * @readonly
         */
        readonly miscMonitorCaps: OPTIONAL<MiscMonitorCaps>,
        /**
         * @summary `correlatorDataSupported`.
         * @public
         * @readonly
         */
        readonly correlatorDataSupported: OPTIONAL<BOOLEAN>,
        /**
         * @summary `dynamicFeatureSupported`.
         * @public
         * @readonly
         */
        readonly dynamicFeatureSupported: OPTIONAL<DynamicFeatureSupported>,
        /**
         * @summary `callLinkageOptions`.
         * @public
         * @readonly
         */
        readonly callLinkageOptions: OPTIONAL<CallLinkageOptions>,
        /**
         * @summary `aCDModels`.
         * @public
         * @readonly
         */
        readonly aCDModels: OPTIONAL<ACDModels>,
        /**
         * @summary `agentLogOnModels`.
         * @public
         * @readonly
         */
        readonly agentLogOnModels: OPTIONAL<AgentLogOnModels>,
        /**
         * @summary `agentStateModels`.
         * @public
         * @readonly
         */
        readonly agentStateModels: OPTIONAL<AgentStateModels>,
        /**
         * @summary `connectionView`.
         * @public
         * @readonly
         */
        readonly connectionView: ConnectionView,
        /**
         * @summary `maxLengthParameters`.
         * @public
         * @readonly
         */
        readonly maxLengthParameters: MaxLengthParameters,
        /**
         * @summary `maxLengthParametersContinued`.
         * @public
         * @readonly
         */
        readonly maxLengthParametersContinued: OPTIONAL<MaxLengthParametersContinued>,
        /**
         * @summary `servEvtsList`.
         * @public
         * @readonly
         */
        readonly servEvtsList: OPTIONAL<ServEvtsList>,
        /**
         * @summary `privateDataVersionList`.
         * @public
         * @readonly
         */
        readonly privateDataVersionList: OPTIONAL<PrivateDataVersionList>,
        /**
         * @summary `systemStatusTimer`.
         * @public
         * @readonly
         */
        readonly systemStatusTimer: OPTIONAL<INTEGER>,
        /**
         * @summary `simpleThreshold`.
         * @public
         * @readonly
         */
        readonly simpleThreshold: OPTIONAL<INTEGER>,
        /**
         * @summary `filterThreshold`.
         * @public
         * @readonly
         */
        readonly filterThreshold: OPTIONAL<FilterThreshold>,
        /**
         * @summary `mediaServiceCapsList`.
         * @public
         * @readonly
         */
        readonly mediaServiceCapsList: OPTIONAL<MediaServiceCapsList>,
        /**
         * @summary `maxDeviceHistoryLength`.
         * @public
         * @readonly
         */
        readonly maxDeviceHistoryLength: OPTIONAL<INTEGER>,
        /**
         * @summary `maxDestinationDevicesForDeflect`.
         * @public
         * @readonly
         */
        readonly maxDestinationDevicesForDeflect: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetSwitchingFunctionCapsResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetSwitchingFunctionCapsResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetSwitchingFunctionCapsResult`.
     * @returns {GetSwitchingFunctionCapsResult}
     */
    public static _from_object (_o: { [_K in keyof (GetSwitchingFunctionCapsResult)]: (GetSwitchingFunctionCapsResult)[_K] }): GetSwitchingFunctionCapsResult {
        return new GetSwitchingFunctionCapsResult(_o.switchingSubDomainName, _o.manufacturerName, _o.profiles, _o.deviceIDFormat, _o.swDomainFeatures, _o.swAppearanceAddressability, _o.swAppearanceTypes, _o.ignoreUnsupportedParameters, _o.callCharacteristicsSupported, _o.mediaClassSupport, _o.numberOfChannels, _o.maxChannelBind, _o.miscMediaCallCharacteristics, _o.connectionRateList, _o.delayToleranceList, _o.pauseTime, _o.currentTime, _o.messageSeqNumbers, _o.timeStampMode, _o.securityMode, _o.securityFormat, _o.privateDataFormat, _o.transAndConfSetup, _o.monitorFilterItems, _o.miscMonitorCaps, _o.correlatorDataSupported, _o.dynamicFeatureSupported, _o.callLinkageOptions, _o.aCDModels, _o.agentLogOnModels, _o.agentStateModels, _o.connectionView, _o.maxLengthParameters, _o.maxLengthParametersContinued, _o.servEvtsList, _o.privateDataVersionList, _o.systemStatusTimer, _o.simpleThreshold, _o.filterThreshold, _o.mediaServiceCapsList, _o.maxDeviceHistoryLength, _o.maxDestinationDevicesForDeflect, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `ignoreUnsupportedParameters`
         * @public
         * @static
         */

    public static _enum_for_ignoreUnsupportedParameters = _enum_for_IgnoreUnsupportedParameters;        /**
         * @summary The enum used as the type of the component `securityMode`
         * @public
         * @static
         */

    public static _enum_for_securityMode = _enum_for_SecurityMode;        /**
         * @summary The enum used as the type of the component `dynamicFeatureSupported`
         * @public
         * @static
         */

    public static _enum_for_dynamicFeatureSupported = _enum_for_DynamicFeatureSupported;        /**
         * @summary The enum used as the type of the component `connectionView`
         * @public
         * @static
         */

    public static _enum_for_connectionView = _enum_for_ConnectionView;
}

/**
 * @summary The Leading Root Component Types of GetSwitchingFunctionCapsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetSwitchingFunctionCapsResult: $.ComponentSpec[] = [
    new $.ComponentSpec("switchingSubDomainName", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("manufacturerName", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("profiles", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("deviceIDFormat", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("swDomainFeatures", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("swAppearanceAddressability", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("swAppearanceTypes", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("ignoreUnsupportedParameters", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("callCharacteristicsSupported", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mediaClassSupport", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("numberOfChannels", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("maxChannelBind", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("miscMediaCallCharacteristics", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("connectionRateList", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("delayToleranceList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("pauseTime", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("currentTime", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("messageSeqNumbers", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("timeStampMode", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("securityMode", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("securityFormat", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("privateDataFormat", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("transAndConfSetup", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("monitorFilterItems", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("miscMonitorCaps", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("correlatorDataSupported", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("dynamicFeatureSupported", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("callLinkageOptions", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    new $.ComponentSpec("aCDModels", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("agentLogOnModels", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("agentStateModels", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("connectionView", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("maxLengthParameters", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("maxLengthParametersContinued", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    new $.ComponentSpec("servEvtsList", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("privateDataVersionList", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("systemStatusTimer", true, $.hasTag(_TagClass.context, 24), undefined, undefined),
    new $.ComponentSpec("simpleThreshold", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("filterThreshold", true, $.hasTag(_TagClass.context, 26), undefined, undefined),
    new $.ComponentSpec("mediaServiceCapsList", true, $.hasTag(_TagClass.context, 27), undefined, undefined),
    new $.ComponentSpec("maxDeviceHistoryLength", true, $.hasTag(_TagClass.context, 29), undefined, undefined),
    new $.ComponentSpec("maxDestinationDevicesForDeflect", true, $.hasTag(_TagClass.context, 30), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetSwitchingFunctionCapsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetSwitchingFunctionCapsResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetSwitchingFunctionCapsResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetSwitchingFunctionCapsResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetSwitchingFunctionCapsResult: $.ASN1Decoder<GetSwitchingFunctionCapsResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionCapsResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionCapsResult (el: _Element): GetSwitchingFunctionCapsResult {
    if (!_cached_decoder_for_GetSwitchingFunctionCapsResult) { _cached_decoder_for_GetSwitchingFunctionCapsResult = function (el: _Element): GetSwitchingFunctionCapsResult {
    let switchingSubDomainName!: IA5String;
    let manufacturerName!: IA5String;
    let profiles!: Profiles;
    let deviceIDFormat!: DeviceIDFormat;
    let swDomainFeatures!: SwDomainFeatures;
    let swAppearanceAddressability!: SwAppearanceAddressability;
    let swAppearanceTypes!: SwAppearanceTypes;
    let ignoreUnsupportedParameters!: IgnoreUnsupportedParameters;
    let callCharacteristicsSupported: OPTIONAL<CallCharacteristics>;
    let mediaClassSupport: OPTIONAL<MonitorMediaClass>;
    let numberOfChannels: OPTIONAL<NumberOfChannels>;
    let maxChannelBind: OPTIONAL<MaxChannelBind>;
    let miscMediaCallCharacteristics: OPTIONAL<MiscMediaCallCharacteristics>;
    let connectionRateList: OPTIONAL<ConnectionRateList>;
    let delayToleranceList: OPTIONAL<DelayToleranceList>;
    let pauseTime: OPTIONAL<PauseTime>;
    let currentTime: OPTIONAL<TimeInfo>;
    let messageSeqNumbers: OPTIONAL<MessageSeqNumbers>;
    let timeStampMode: OPTIONAL<TimeStampMode>;
    let securityMode: OPTIONAL<SecurityMode>;
    let securityFormat: OPTIONAL<SecurityFormat>;
    let privateDataFormat: OPTIONAL<SecurityFormat>;
    let transAndConfSetup: OPTIONAL<TransAndConfSetup>;
    let monitorFilterItems: OPTIONAL<MonitorFilterItems>;
    let miscMonitorCaps: OPTIONAL<MiscMonitorCaps>;
    let correlatorDataSupported: OPTIONAL<BOOLEAN>;
    let dynamicFeatureSupported: OPTIONAL<DynamicFeatureSupported>;
    let callLinkageOptions: OPTIONAL<CallLinkageOptions>;
    let aCDModels: OPTIONAL<ACDModels>;
    let agentLogOnModels: OPTIONAL<AgentLogOnModels>;
    let agentStateModels: OPTIONAL<AgentStateModels>;
    let connectionView!: ConnectionView;
    let maxLengthParameters!: MaxLengthParameters;
    let maxLengthParametersContinued: OPTIONAL<MaxLengthParametersContinued>;
    let servEvtsList: OPTIONAL<ServEvtsList>;
    let privateDataVersionList: OPTIONAL<PrivateDataVersionList>;
    let systemStatusTimer: OPTIONAL<INTEGER>;
    let simpleThreshold: OPTIONAL<INTEGER>;
    let filterThreshold: OPTIONAL<FilterThreshold>;
    let mediaServiceCapsList: OPTIONAL<MediaServiceCapsList>;
    let maxDeviceHistoryLength: OPTIONAL<INTEGER>;
    let maxDestinationDevicesForDeflect: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "switchingSubDomainName": (_el: _Element): void => { switchingSubDomainName = $._decodeIA5String(_el); },
        "manufacturerName": (_el: _Element): void => { manufacturerName = $._decodeIA5String(_el); },
        "profiles": (_el: _Element): void => { profiles = _decode_Profiles(_el); },
        "deviceIDFormat": (_el: _Element): void => { deviceIDFormat = _decode_DeviceIDFormat(_el); },
        "swDomainFeatures": (_el: _Element): void => { swDomainFeatures = _decode_SwDomainFeatures(_el); },
        "swAppearanceAddressability": (_el: _Element): void => { swAppearanceAddressability = _decode_SwAppearanceAddressability(_el); },
        "swAppearanceTypes": (_el: _Element): void => { swAppearanceTypes = _decode_SwAppearanceTypes(_el); },
        "ignoreUnsupportedParameters": (_el: _Element): void => { ignoreUnsupportedParameters = _decode_IgnoreUnsupportedParameters(_el); },
        "callCharacteristicsSupported": (_el: _Element): void => { callCharacteristicsSupported = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaClassSupport": (_el: _Element): void => { mediaClassSupport = $._decode_implicit<MonitorMediaClass>(() => _decode_MonitorMediaClass)(_el); },
        "numberOfChannels": (_el: _Element): void => { numberOfChannels = $._decode_implicit<NumberOfChannels>(() => _decode_NumberOfChannels)(_el); },
        "maxChannelBind": (_el: _Element): void => { maxChannelBind = $._decode_implicit<MaxChannelBind>(() => _decode_MaxChannelBind)(_el); },
        "miscMediaCallCharacteristics": (_el: _Element): void => { miscMediaCallCharacteristics = $._decode_implicit<MiscMediaCallCharacteristics>(() => _decode_MiscMediaCallCharacteristics)(_el); },
        "connectionRateList": (_el: _Element): void => { connectionRateList = $._decode_implicit<ConnectionRateList>(() => _decode_ConnectionRateList)(_el); },
        "delayToleranceList": (_el: _Element): void => { delayToleranceList = $._decode_implicit<DelayToleranceList>(() => _decode_DelayToleranceList)(_el); },
        "pauseTime": (_el: _Element): void => { pauseTime = $._decode_implicit<PauseTime>(() => _decode_PauseTime)(_el); },
        "currentTime": (_el: _Element): void => { currentTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "messageSeqNumbers": (_el: _Element): void => { messageSeqNumbers = $._decode_implicit<MessageSeqNumbers>(() => _decode_MessageSeqNumbers)(_el); },
        "timeStampMode": (_el: _Element): void => { timeStampMode = $._decode_implicit<TimeStampMode>(() => _decode_TimeStampMode)(_el); },
        "securityMode": (_el: _Element): void => { securityMode = $._decode_implicit<SecurityMode>(() => _decode_SecurityMode)(_el); },
        "securityFormat": (_el: _Element): void => { securityFormat = $._decode_implicit<SecurityFormat>(() => _decode_SecurityFormat)(_el); },
        "privateDataFormat": (_el: _Element): void => { privateDataFormat = $._decode_implicit<SecurityFormat>(() => _decode_SecurityFormat)(_el); },
        "transAndConfSetup": (_el: _Element): void => { transAndConfSetup = $._decode_implicit<TransAndConfSetup>(() => _decode_TransAndConfSetup)(_el); },
        "monitorFilterItems": (_el: _Element): void => { monitorFilterItems = $._decode_implicit<MonitorFilterItems>(() => _decode_MonitorFilterItems)(_el); },
        "miscMonitorCaps": (_el: _Element): void => { miscMonitorCaps = $._decode_implicit<MiscMonitorCaps>(() => _decode_MiscMonitorCaps)(_el); },
        "correlatorDataSupported": (_el: _Element): void => { correlatorDataSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "dynamicFeatureSupported": (_el: _Element): void => { dynamicFeatureSupported = $._decode_implicit<DynamicFeatureSupported>(() => _decode_DynamicFeatureSupported)(_el); },
        "callLinkageOptions": (_el: _Element): void => { callLinkageOptions = $._decode_implicit<CallLinkageOptions>(() => _decode_CallLinkageOptions)(_el); },
        "aCDModels": (_el: _Element): void => { aCDModels = $._decode_implicit<ACDModels>(() => _decode_ACDModels)(_el); },
        "agentLogOnModels": (_el: _Element): void => { agentLogOnModels = $._decode_implicit<AgentLogOnModels>(() => _decode_AgentLogOnModels)(_el); },
        "agentStateModels": (_el: _Element): void => { agentStateModels = $._decode_implicit<AgentStateModels>(() => _decode_AgentStateModels)(_el); },
        "connectionView": (_el: _Element): void => { connectionView = _decode_ConnectionView(_el); },
        "maxLengthParameters": (_el: _Element): void => { maxLengthParameters = _decode_MaxLengthParameters(_el); },
        "maxLengthParametersContinued": (_el: _Element): void => { maxLengthParametersContinued = $._decode_implicit<MaxLengthParametersContinued>(() => _decode_MaxLengthParametersContinued)(_el); },
        "servEvtsList": (_el: _Element): void => { servEvtsList = $._decode_implicit<ServEvtsList>(() => _decode_ServEvtsList)(_el); },
        "privateDataVersionList": (_el: _Element): void => { privateDataVersionList = $._decode_implicit<PrivateDataVersionList>(() => _decode_PrivateDataVersionList)(_el); },
        "systemStatusTimer": (_el: _Element): void => { systemStatusTimer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "simpleThreshold": (_el: _Element): void => { simpleThreshold = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "filterThreshold": (_el: _Element): void => { filterThreshold = $._decode_implicit<FilterThreshold>(() => _decode_FilterThreshold)(_el); },
        "mediaServiceCapsList": (_el: _Element): void => { mediaServiceCapsList = $._decode_implicit<MediaServiceCapsList>(() => _decode_MediaServiceCapsList)(_el); },
        "maxDeviceHistoryLength": (_el: _Element): void => { maxDeviceHistoryLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxDestinationDevicesForDeflect": (_el: _Element): void => { maxDestinationDevicesForDeflect = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetSwitchingFunctionCapsResult,
        _extension_additions_list_spec_for_GetSwitchingFunctionCapsResult,
        _root_component_type_list_2_spec_for_GetSwitchingFunctionCapsResult,
        undefined,
    );
    return new GetSwitchingFunctionCapsResult(
        switchingSubDomainName,
        manufacturerName,
        profiles,
        deviceIDFormat,
        swDomainFeatures,
        swAppearanceAddressability,
        swAppearanceTypes,
        ignoreUnsupportedParameters,
        callCharacteristicsSupported,
        mediaClassSupport,
        numberOfChannels,
        maxChannelBind,
        miscMediaCallCharacteristics,
        connectionRateList,
        delayToleranceList,
        pauseTime,
        currentTime,
        messageSeqNumbers,
        timeStampMode,
        securityMode,
        securityFormat,
        privateDataFormat,
        transAndConfSetup,
        monitorFilterItems,
        miscMonitorCaps,
        correlatorDataSupported,
        dynamicFeatureSupported,
        callLinkageOptions,
        aCDModels,
        agentLogOnModels,
        agentStateModels,
        connectionView,
        maxLengthParameters,
        maxLengthParametersContinued,
        servEvtsList,
        privateDataVersionList,
        systemStatusTimer,
        simpleThreshold,
        filterThreshold,
        mediaServiceCapsList,
        maxDeviceHistoryLength,
        maxDestinationDevicesForDeflect,
        extensions
    );
}; }
    return _cached_decoder_for_GetSwitchingFunctionCapsResult(el);
}

let _cached_encoder_for_GetSwitchingFunctionCapsResult: $.ASN1Encoder<GetSwitchingFunctionCapsResult> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionCapsResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionCapsResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionCapsResult (value: GetSwitchingFunctionCapsResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionCapsResult) { _cached_encoder_for_GetSwitchingFunctionCapsResult = function (value: GetSwitchingFunctionCapsResult, elGetter: $.ASN1Encoder<GetSwitchingFunctionCapsResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.switchingSubDomainName, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.manufacturerName, $.BER),
            /* REQUIRED   */ _encode_Profiles(value.profiles, $.BER),
            /* REQUIRED   */ _encode_DeviceIDFormat(value.deviceIDFormat, $.BER),
            /* REQUIRED   */ _encode_SwDomainFeatures(value.swDomainFeatures, $.BER),
            /* REQUIRED   */ _encode_SwAppearanceAddressability(value.swAppearanceAddressability, $.BER),
            /* REQUIRED   */ _encode_SwAppearanceTypes(value.swAppearanceTypes, $.BER),
            /* REQUIRED   */ _encode_IgnoreUnsupportedParameters(value.ignoreUnsupportedParameters, $.BER),
            /* IF_ABSENT  */ ((value.callCharacteristicsSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristicsSupported, $.BER)),
            /* IF_ABSENT  */ ((value.mediaClassSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMediaClass, $.BER)(value.mediaClassSupport, $.BER)),
            /* IF_ABSENT  */ ((value.numberOfChannels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NumberOfChannels, $.BER)(value.numberOfChannels, $.BER)),
            /* IF_ABSENT  */ ((value.maxChannelBind === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MaxChannelBind, $.BER)(value.maxChannelBind, $.BER)),
            /* IF_ABSENT  */ ((value.miscMediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MiscMediaCallCharacteristics, $.BER)(value.miscMediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.connectionRateList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ConnectionRateList, $.BER)(value.connectionRateList, $.BER)),
            /* IF_ABSENT  */ ((value.delayToleranceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DelayToleranceList, $.BER)(value.delayToleranceList, $.BER)),
            /* IF_ABSENT  */ ((value.pauseTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PauseTime, $.BER)(value.pauseTime, $.BER)),
            /* IF_ABSENT  */ ((value.currentTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TimeInfo, $.BER)(value.currentTime, $.BER)),
            /* IF_ABSENT  */ ((value.messageSeqNumbers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MessageSeqNumbers, $.BER)(value.messageSeqNumbers, $.BER)),
            /* IF_ABSENT  */ ((value.timeStampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TimeStampMode, $.BER)(value.timeStampMode, $.BER)),
            /* IF_ABSENT  */ ((value.securityMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SecurityMode, $.BER)(value.securityMode, $.BER)),
            /* IF_ABSENT  */ ((value.securityFormat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SecurityFormat, $.BER)(value.securityFormat, $.BER)),
            /* IF_ABSENT  */ ((value.privateDataFormat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SecurityFormat, $.BER)(value.privateDataFormat, $.BER)),
            /* IF_ABSENT  */ ((value.transAndConfSetup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_TransAndConfSetup, $.BER)(value.transAndConfSetup, $.BER)),
            /* IF_ABSENT  */ ((value.monitorFilterItems === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_MonitorFilterItems, $.BER)(value.monitorFilterItems, $.BER)),
            /* IF_ABSENT  */ ((value.miscMonitorCaps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_MiscMonitorCaps, $.BER)(value.miscMonitorCaps, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorDataSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.correlatorDataSupported, $.BER)),
            /* IF_ABSENT  */ ((value.dynamicFeatureSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_DynamicFeatureSupported, $.BER)(value.dynamicFeatureSupported, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_CallLinkageOptions, $.BER)(value.callLinkageOptions, $.BER)),
            /* IF_ABSENT  */ ((value.aCDModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_ACDModels, $.BER)(value.aCDModels, $.BER)),
            /* IF_ABSENT  */ ((value.agentLogOnModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_AgentLogOnModels, $.BER)(value.agentLogOnModels, $.BER)),
            /* IF_ABSENT  */ ((value.agentStateModels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_AgentStateModels, $.BER)(value.agentStateModels, $.BER)),
            /* REQUIRED   */ _encode_ConnectionView(value.connectionView, $.BER),
            /* REQUIRED   */ _encode_MaxLengthParameters(value.maxLengthParameters, $.BER),
            /* IF_ABSENT  */ ((value.maxLengthParametersContinued === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_MaxLengthParametersContinued, $.BER)(value.maxLengthParametersContinued, $.BER)),
            /* IF_ABSENT  */ ((value.servEvtsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_ServEvtsList, $.BER)(value.servEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.privateDataVersionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_PrivateDataVersionList, $.BER)(value.privateDataVersionList, $.BER)),
            /* IF_ABSENT  */ ((value.systemStatusTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.systemStatusTimer, $.BER)),
            /* IF_ABSENT  */ ((value.simpleThreshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.simpleThreshold, $.BER)),
            /* IF_ABSENT  */ ((value.filterThreshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_FilterThreshold, $.BER)(value.filterThreshold, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceCapsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_MediaServiceCapsList, $.BER)(value.mediaServiceCapsList, $.BER)),
            /* IF_ABSENT  */ ((value.maxDeviceHistoryLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER)(value.maxDeviceHistoryLength, $.BER)),
            /* IF_ABSENT  */ ((value.maxDestinationDevicesForDeflect === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.maxDestinationDevicesForDeflect, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetSwitchingFunctionCapsResult(value, elGetter);
}


/* eslint-enable */
